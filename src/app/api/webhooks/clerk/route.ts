import { prisma } from '@/src/Lib/client'
import { verifyWebhook } from '@clerk/nextjs/webhooks'
import { NextRequest } from 'next/server'
import { AirwallexConfigOutSerializer } from 'svix/dist/models/airwallexConfigOut'

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req)

    // Do something with payload
    // For this guide, log payload to console
    const { id } = evt.data
    const eventType = evt.type
    // console.log(`Received webhook with ID ${id} and event type of ${eventType}`)
    // console.log('Webhook payload:', evt.data)

    if(eventType == "user.created"){
      try{

          await prisma.user.create({
            data: {
              id:evt.data.id,
              username : evt.data.username,
              avatar : evt.data.image_url,
            }
          })
      }
      catch(err){
        console.log(err);
        return new Response('error occurs in creating user', {status : 500});
      }
    }
    
    if(eventType == "user.updated"){
      try{

          await prisma.user.update({
            where : {id:evt.data.id},

            data: {
              username : evt.data.username,
              avatar : evt.data.image_url,
            }
          })
      }
      catch(err){
        console.log(err);
        return new Response('error occurs in updating user', {status : 500});
      }
    }
    
    return new Response('Webhook received', { status: 200 })

  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error verifying webhook', { status: 400 })
  }
}