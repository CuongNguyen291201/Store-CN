import React, { Component } from 'react'
import MessengerCustomerChat from 'react-messenger-customer-chat';

export default class Messenger extends Component {
    render() {
        return (
            <div>
                <MessengerCustomerChat
                    pageId="356848078296405"
                    appId="233700584958285"
                    htmlRef="<REF_STRING>"
                />
            </div>
        )
    }
}
