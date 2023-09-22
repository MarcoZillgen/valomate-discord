import { Client } from 'discord.js'
import ready from './listeners/ready'
import dotenv from 'dotenv'
dotenv.config()

console.log('Bot is starting...')

const client = new Client({
  intents: []
})

ready(client)

client.login(process.env.BOT_TOKEN)
