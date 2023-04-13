/**
* In this challenge, you should sort messages by their sentAt property (oldest first) and 
* modify them by adding an "unread" property
* (boolean meaning that the current user did not read this message) based on the lastActivityDatetime
* input. 
*
* @param lastActivityDatetime String representing an ISO8601 datetime. Represent the last time the user checked his messages
* @param messages List of messages, unsorted and without unread property
* @returns Sorted list of messages with the unread information
*/

// ↓ uncomment bellow lines and add your response!

export default function ({ lastActivityDatetime, messages } : { lastActivityDatetime: string, messages: Message[] }): MessageWithUnread[] {
    
    const sorted = messages.sort((a, b) => {
        return a.sentAt < b.sentAt ? -1 : 1
    })

    const mess = sorted.map(message => {
        const newMessage: MessageWithUnread = {
            author: message.author,
            sentAt: message.sentAt,
            message: message.message,
            unread: lastActivityDatetime > message.sentAt ? false : true
        }
        
        return newMessage;
    })
    
    
    return mess;
}


// used interfaces, do not touch
export interface Message {
    author: string;
    sentAt: string;
    message: string;
}

export interface MessageWithUnread extends Message {
    unread: boolean;
}