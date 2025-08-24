import { Container, Header, MessageList, Composer, useWebchat, StylesheetProvider  } from "@botpress/webchat"
import { useMemo } from "react"
import "./App.css"
import pfp from "./assets/pfp.jpg"
import Scroller from "./Scroller"



function Chat() {
  const clientId = "afe99843-5dc4-41eb-83d0-fe31daf15cbe"

 const { client, clientState, messages, isTyping, user, newConversation } = useWebchat({
    clientId
  })

  function dabUp(dab){
    const payload = {
    "dabbed": dab
  }
   client.sendEvent(payload)
  }

   const config = {
    botName: "Dab Up Bot 🤖",
    botAvatar: pfp,
  }

const enrichedMessages = useMemo(() => {
  return messages.map((message) => {
    const direction = message.authorId === user?.userId ? "outgoing" : "incoming"
    return {
      ...message,
      direction,
      sender:
        direction === "outgoing"
          ? { name: user?.name ?? "You", avatar: user?.pictureUrl }
          : { name: config.botName ?? "Bot", avatar: config.botAvatar }
    }
  })
}, [messages, user?.userId, user?.name, user?.pictureUrl, config.botName, config.botAvatar])

const showBotTyping =
  isTyping && enrichedMessages[enrichedMessages.length - 1]?.direction === "outgoing"

  const themeConfig = {
  color: '#FFFFFF',
  radius: 4,
  variant: 'soft',
  themeMode: 'light',
  headerVariant: 'solid',
}

  const buttonStyle = "cursor-pointer border border-gray-200 w-42 rounded-2xl bg-white hover:border-gray-300 active:bg-gray-200 active:border-gray-400 active:text-gray-900 active:shadow-sm active:translate-y-px touch-manipulation transition duration-150 ease-out select-none"

  return (
    <div className="mx-auto max-w-[1000px] h-screen flex flex-col">
<div className="flex min-h-[450px] h-[70dvh] md:h-[80dvh] lg:h-[85dvh] 2xl:h-[90dvh] max-h-[100dvh]">
            <StylesheetProvider
              color={themeConfig.color}
              fontFamily={themeConfig.fontFamily}
              radius={themeConfig.radius}
              variant={themeConfig.variant}
              themeMode={themeConfig.themeMode}
            />
            <Container
                connected = {clientState !== "disconnected"}
                allowFileUpload = {true}
                style={{
                   width: '100%',
                   border: 'none',
                   height: "100%"
                }}
            >
              
                <Header
                    onOpenChange={() => console.log('Override the header open change')}
                    defaultOpen={true}
                    restartConversation={newConversation}
                    disabled={true}
                    configuration={config}
                    style={{
                      margin: "0 0 10px 0"
                    }}
                />
              

                <MessageList 
                    botAvatar={config.botAvatar} 
                    botName={config.botName} 
                    botDescription={config.botDescription} 
                    isTyping={showBotTyping} 
                    showMarquee={true} 
                    messages={enrichedMessages} 
                    sendMessage={client?.sendMessage} 
                />

                <Composer
                    disableComposer={false}
                    isReadOnly={false}
                    allowFileUpload={true}
                    connected={clientState !== 'disconnected'}
                    sendMessage={client?.sendMessage}
                    uploadFile={client?.uploadFile}
                    composerPlaceholder="We gonna dap or what?"
                    showPoweredBy={false}
                />
               
               <Scroller/>
            </Container>
          </div>
     
        <div className="h-14 flex justify-around mt-4">
            <button onClick={() =>dabUp(true)} className={buttonStyle}>Dab the Homie</button>
            <button onClick={() =>dabUp(false)} className={buttonStyle}>Nah Gee</button>
        </div>
    </div>
  )
}

export default Chat

