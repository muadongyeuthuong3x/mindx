const amqplib = require('amqplib');
const amq_url_cloud = "amqps://gyguaxuc:iV3BKEiZKDSKUN1aZRzH5i8HvtzZ_yCR@armadillo.rmq.cloudamqp.com/gyguaxuc"
const amq_url_docker = '';


const sendQueue = async({msg}) =>{
    // create connect
   try {
    const conn = await amqplib.connect(amq_url_cloud);

    // create channel

    const channel = await conn.createChannel();

    // create name queue

    const nameQueue = "q1"
     
    // create 1 hàng đợi
    await channel.assertQueue(nameQueue,{
        durable: false
    })

    // 5. send to queue

    await channel.sendToQueue(nameQueue , Buffer.from(msg))


   // close
   } catch (error) {
    console.err("Error" , error.message)
   }
    
}

sendQueue({msg:"Hello peoples"})