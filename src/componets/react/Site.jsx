import React, { Component } from 'react';

//
// ООП
// 1. Наследование
// 2. Инкапсуляция
// 3. Полиморфизм
//

export default class Site extends Component {

    componentDidMount() {
        const FRIEND_1 = {
            ID: 1,
            name: "ABS",
            age: 0b01010001
        };
        const FRIEND_2 = {
            ID: 2,
            name: "Ktulhu",
            age: Number.POSITIVE_INFINITY
        };
        const FRIEND_3 = {
            ID: 3,
            name: "Putin",
            nick: "Huilo",
            age: 2
        };
        const FRIEND_4 = {
            ID: 4,
            name: "Normalniy",
            age: 18,
            email: "gaben.uhodi@dota2.com"
        };
        const FRIEND_PET_1 = {
            ID: 5,
            name: "Anatoliy",
            age: 0.01,
            isTail: true
        };

        // const base = new Base();
        const friend1 = new Friend();
        const friend2 = new Friend();
        const friend3 = new Friend();
        const friend4 = new Friend();
        const friend5 = new PetFriend();

        debugger;

        friend1.update( FRIEND_1 );
        friend2.update( FRIEND_2 );
        friend3.update( FRIEND_3 );
        friend4.update( FRIEND_4 );
        friend5.update( FRIEND_PET_1 );

        friend1.addFriend( friend3 );

        friend2.addFriend( friend1 );
        friend2.addFriend( friend3 );
        friend2.addFriend( friend4 );

        friend4.addFriend( friend1 );
        friend4.addFriend( friend3 );
        friend4.addFriend( friend4 );
        friend4.addFriend( friend5 );

        friend5.addFriend( friend4 );
        
        debugger;
    }

	render() {
        return (
            <div className="site">
                OOP is great!
            </div>
        );
    }
}

class Base {

    constructor() {
        this.init();
    }

    init() {
        this.ID = 1;            // ID
        this.source = null;     // Изначальные данные
    }

    update( data = { } ) {
        for ( const key in data ) {
            if ( !this.hasOwnProperty( key ) ) continue;
            this[ key ]  = data[ key ];
        }
    }

}

class Profile extends Base {

    init() {
        this.ID = 1;
        this.name = "NoName";
        this.nick = "Infusoria";
        this.email = null;
        this.image = null;
        this.age = 0;
        this.birthdayDate = new Date();
    }

}

class Friend extends Profile {

    init() {
        super.init();
        this.friendList = [];
    }

    isFriend( friend ) {
        return this.friendList.indexOf( friend ) >= 0;
    }
    addFriend( friend ) {
        if ( friend === this ) return;
        if ( this.isFriend() ) return;
        this.friendList.push( friend );
    }
    removeFriend( friend ) {
        if ( !this.isFriend() ) return;
        const index = this.friendList.indexOf( friend );
        this.friendList.splice( index, 1 );
    }

    update( data = { } ) {
        for ( const key in data ) {
            if ( key === "friendList" ) continue;
            if ( !this.hasOwnProperty( key ) ) continue;
            this[ key ]  = data[ key ];
        }
    }

}

class PetFriend extends Friend {

    init() {
        super.init();
        delete this.email; // Инкапсюляция
        this.isTail = false;
    }

    // Полиморфизм
    isFriend( friend ) { }
    addFriend( friend ) { }
    removeFriend( friend ) { }

}
