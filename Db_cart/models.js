const Sequlize= require('sequelize')
const datatypes=Sequlize.DataTypes;
const dB_Config=require("../database_config").DB


const db=new Sequlize(dB_Config.DATABASE,dB_Config.USER,dB_Config.PASSWORD,{
    host:dB_Config.HOST,
    dialect:"mysql"
})



const Colourcatelog=db.define('colourcat',{
    itemid:{
        type:datatypes.INTEGER,
        autoIncrement:true,
        primaryKey:true

    },
    colour:{
        type:datatypes.STRING,
        allowNull:false
    },
    price:{ type:datatypes.INTEGER}
    ,
    imagepath:{type:datatypes.STRING}
})

const Heelstylecatelog=db.define('heelstyle',{
    styleid:{
        type:datatypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
imagespatharray:{
        type:datatypes.TEXT,
    // allowNull:false,
            // get:function () {
            //     return this.dataValues.imagespatharray.split(';')
            // },
            // set:function (data) {
            //     return data.join(';')
            //
            // }
    get: function () {
        return this.getDataValue('imagespatharray').split(';')
    },
    set: function (val) {
        this.setDataValue('imagespatharray',val.join(';'));
    }


    }
})

Heelstylecatelog.belongsTo(Colourcatelog);
// Heelstylecatelog.hasOne(Colourcatelog); //Isse mera join ho jayega
db.sync({alter:true});

exports.models={
    Colourcatelog,Heelstylecatelog
}

//Mogodb use for unique id creation -