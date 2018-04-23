import React, { Component } from 'react';

class Mail extends Component {
  render() {
    return (
    <div id="mail-main">
        <form>
            <input name="name" placeholder="Imię i nazwisko"></input>
            <input name="email" type="email" placeholder="email@email.pl"></input>
            <textarea id="msg-area" name="message" placeholder="Napisz tu wiadomość"></textarea>  
            <input id="submit" name="submit" type="submit" value="Wyślij"></input>
        </form>
    </div>
    );
  }
}

export default Mail;