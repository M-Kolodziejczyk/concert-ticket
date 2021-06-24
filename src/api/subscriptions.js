/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateInvitationByEmail = /* GraphQL */ `
  subscription OnCreateInvitationByEmail($email: String!) {
    onCreateInvitationByEmail(email: $email) {
      email
      message
      authorID
      authorEmail
      senderTable
      senderTableElementID
      senderTableElementName
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
      email
      name
      artistID
      ordersByDate {
        items {
          id
          customer
          userName
          status
          stripeIntentID
          total
          createdAt
          updatedAt
          userID
        }
        nextToken
      }
      ordersByStatus {
        items {
          id
          customer
          userName
          status
          stripeIntentID
          total
          createdAt
          updatedAt
          userID
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
      concerts {
        items {
          id
          userName
          identityId
          name
          date
          venue
          genres
          description
          keyImage
          invitations
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      bands {
        items {
          id
          userName
          identityId
          name
          genre
          keyImage
          invitations
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      artist {
        id
        identityId
        name
        genre
        role
        createdAt
        updatedAt
        owner
        bands {
          nextToken
        }
      }
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
      email
      name
      artistID
      ordersByDate {
        items {
          id
          customer
          userName
          status
          stripeIntentID
          total
          createdAt
          updatedAt
          userID
        }
        nextToken
      }
      ordersByStatus {
        items {
          id
          customer
          userName
          status
          stripeIntentID
          total
          createdAt
          updatedAt
          userID
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
      concerts {
        items {
          id
          userName
          identityId
          name
          date
          venue
          genres
          description
          keyImage
          invitations
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      bands {
        items {
          id
          userName
          identityId
          name
          genre
          keyImage
          invitations
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      artist {
        id
        identityId
        name
        genre
        role
        createdAt
        updatedAt
        owner
        bands {
          nextToken
        }
      }
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
      email
      name
      artistID
      ordersByDate {
        items {
          id
          customer
          userName
          status
          stripeIntentID
          total
          createdAt
          updatedAt
          userID
        }
        nextToken
      }
      ordersByStatus {
        items {
          id
          customer
          userName
          status
          stripeIntentID
          total
          createdAt
          updatedAt
          userID
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
      concerts {
        items {
          id
          userName
          identityId
          name
          date
          venue
          genres
          description
          keyImage
          invitations
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      bands {
        items {
          id
          userName
          identityId
          name
          genre
          keyImage
          invitations
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      artist {
        id
        identityId
        name
        genre
        role
        createdAt
        updatedAt
        owner
        bands {
          nextToken
        }
      }
    }
  }
`;
export const onCreateTicketOrder = /* GraphQL */ `
  subscription OnCreateTicketOrder($userID: String) {
    onCreateTicketOrder(userID: $userID) {
      id
      ticketID
      orderID
      userID
      price
      fullName
      order {
        id
        customer
        userName
        status
        stripeIntentID
        total
        createdAt
        tickets {
          nextToken
        }
        updatedAt
        userID
      }
      createdAt
      updatedAt
      ticket {
        id
        eventName
        description
        price
        startDate
        endDate
        date
        venue
        type
        quantity
        concertID
        orders {
          nextToken
        }
        createdAt
        updatedAt
        concert {
          id
          userName
          identityId
          name
          date
          venue
          genres
          description
          keyImage
          invitations
          createdAt
          updatedAt
          owner
        }
        owner
      }
    }
  }
`;
export const onUpdateTicketOrder = /* GraphQL */ `
  subscription OnUpdateTicketOrder($userID: String) {
    onUpdateTicketOrder(userID: $userID) {
      id
      ticketID
      orderID
      userID
      price
      fullName
      order {
        id
        customer
        userName
        status
        stripeIntentID
        total
        createdAt
        tickets {
          nextToken
        }
        updatedAt
        userID
      }
      createdAt
      updatedAt
      ticket {
        id
        eventName
        description
        price
        startDate
        endDate
        date
        venue
        type
        quantity
        concertID
        orders {
          nextToken
        }
        createdAt
        updatedAt
        concert {
          id
          userName
          identityId
          name
          date
          venue
          genres
          description
          keyImage
          invitations
          createdAt
          updatedAt
          owner
        }
        owner
      }
    }
  }
`;
export const onDeleteTicketOrder = /* GraphQL */ `
  subscription OnDeleteTicketOrder($userID: String) {
    onDeleteTicketOrder(userID: $userID) {
      id
      ticketID
      orderID
      userID
      price
      fullName
      order {
        id
        customer
        userName
        status
        stripeIntentID
        total
        createdAt
        tickets {
          nextToken
        }
        updatedAt
        userID
      }
      createdAt
      updatedAt
      ticket {
        id
        eventName
        description
        price
        startDate
        endDate
        date
        venue
        type
        quantity
        concertID
        orders {
          nextToken
        }
        createdAt
        updatedAt
        concert {
          id
          userName
          identityId
          name
          date
          venue
          genres
          description
          keyImage
          invitations
          createdAt
          updatedAt
          owner
        }
        owner
      }
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($userID: String) {
    onCreateOrder(userID: $userID) {
      id
      customer
      userName
      status
      stripeIntentID
      total
      createdAt
      tickets {
        items {
          id
          ticketID
          orderID
          userID
          price
          fullName
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
      userID
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($userID: String) {
    onUpdateOrder(userID: $userID) {
      id
      customer
      userName
      status
      stripeIntentID
      total
      createdAt
      tickets {
        items {
          id
          ticketID
          orderID
          userID
          price
          fullName
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
      userID
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($userID: String) {
    onDeleteOrder(userID: $userID) {
      id
      customer
      userName
      status
      stripeIntentID
      total
      createdAt
      tickets {
        items {
          id
          ticketID
          orderID
          userID
          price
          fullName
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
      userID
    }
  }
`;
export const onCreateConcert = /* GraphQL */ `
  subscription OnCreateConcert {
    onCreateConcert {
      id
      userName
      identityId
      name
      date
      venue
      genres
      description
      keyImage
      invitations
      createdAt
      updatedAt
      owner
      bands {
        items {
          id
          concertID
          bandID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      artists {
        items {
          id
          concertID
          artistID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      tickets {
        items {
          id
          eventName
          description
          price
          startDate
          endDate
          date
          venue
          type
          quantity
          concertID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onUpdateConcert = /* GraphQL */ `
  subscription OnUpdateConcert {
    onUpdateConcert {
      id
      userName
      identityId
      name
      date
      venue
      genres
      description
      keyImage
      invitations
      createdAt
      updatedAt
      owner
      bands {
        items {
          id
          concertID
          bandID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      artists {
        items {
          id
          concertID
          artistID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      tickets {
        items {
          id
          eventName
          description
          price
          startDate
          endDate
          date
          venue
          type
          quantity
          concertID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onDeleteConcert = /* GraphQL */ `
  subscription OnDeleteConcert {
    onDeleteConcert {
      id
      userName
      identityId
      name
      date
      venue
      genres
      description
      keyImage
      invitations
      createdAt
      updatedAt
      owner
      bands {
        items {
          id
          concertID
          bandID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      artists {
        items {
          id
          concertID
          artistID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      tickets {
        items {
          id
          eventName
          description
          price
          startDate
          endDate
          date
          venue
          type
          quantity
          concertID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onCreateBand = /* GraphQL */ `
  subscription OnCreateBand {
    onCreateBand {
      id
      userName
      identityId
      name
      genre
      keyImage
      invitations
      createdAt
      updatedAt
      owner
      members {
        items {
          id
          bandID
          artistID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onUpdateBand = /* GraphQL */ `
  subscription OnUpdateBand {
    onUpdateBand {
      id
      userName
      identityId
      name
      genre
      keyImage
      invitations
      createdAt
      updatedAt
      owner
      members {
        items {
          id
          bandID
          artistID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onDeleteBand = /* GraphQL */ `
  subscription OnDeleteBand {
    onDeleteBand {
      id
      userName
      identityId
      name
      genre
      keyImage
      invitations
      createdAt
      updatedAt
      owner
      members {
        items {
          id
          bandID
          artistID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onCreateArtist = /* GraphQL */ `
  subscription OnCreateArtist {
    onCreateArtist {
      id
      identityId
      name
      genre
      role
      createdAt
      updatedAt
      owner
      bands {
        items {
          id
          bandID
          artistID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onUpdateArtist = /* GraphQL */ `
  subscription OnUpdateArtist {
    onUpdateArtist {
      id
      identityId
      name
      genre
      role
      createdAt
      updatedAt
      owner
      bands {
        items {
          id
          bandID
          artistID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onDeleteArtist = /* GraphQL */ `
  subscription OnDeleteArtist {
    onDeleteArtist {
      id
      identityId
      name
      genre
      role
      createdAt
      updatedAt
      owner
      bands {
        items {
          id
          bandID
          artistID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
    }
  }
`;
export const onCreateArtistBandJoin = /* GraphQL */ `
  subscription OnCreateArtistBandJoin {
    onCreateArtistBandJoin {
      id
      bandID
      artistID
      createdAt
      updatedAt
      band {
        id
        userName
        identityId
        name
        genre
        keyImage
        invitations
        createdAt
        updatedAt
        owner
        members {
          nextToken
        }
      }
      artist {
        id
        identityId
        name
        genre
        role
        createdAt
        updatedAt
        owner
        bands {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onUpdateArtistBandJoin = /* GraphQL */ `
  subscription OnUpdateArtistBandJoin {
    onUpdateArtistBandJoin {
      id
      bandID
      artistID
      createdAt
      updatedAt
      band {
        id
        userName
        identityId
        name
        genre
        keyImage
        invitations
        createdAt
        updatedAt
        owner
        members {
          nextToken
        }
      }
      artist {
        id
        identityId
        name
        genre
        role
        createdAt
        updatedAt
        owner
        bands {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onDeleteArtistBandJoin = /* GraphQL */ `
  subscription OnDeleteArtistBandJoin {
    onDeleteArtistBandJoin {
      id
      bandID
      artistID
      createdAt
      updatedAt
      band {
        id
        userName
        identityId
        name
        genre
        keyImage
        invitations
        createdAt
        updatedAt
        owner
        members {
          nextToken
        }
      }
      artist {
        id
        identityId
        name
        genre
        role
        createdAt
        updatedAt
        owner
        bands {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onCreateConcertBandJoin = /* GraphQL */ `
  subscription OnCreateConcertBandJoin {
    onCreateConcertBandJoin {
      id
      concertID
      bandID
      createdAt
      updatedAt
      concert {
        id
        userName
        identityId
        name
        date
        venue
        genres
        description
        keyImage
        invitations
        createdAt
        updatedAt
        owner
        bands {
          nextToken
        }
        artists {
          nextToken
        }
        tickets {
          nextToken
        }
      }
      band {
        id
        userName
        identityId
        name
        genre
        keyImage
        invitations
        createdAt
        updatedAt
        owner
        members {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onUpdateConcertBandJoin = /* GraphQL */ `
  subscription OnUpdateConcertBandJoin {
    onUpdateConcertBandJoin {
      id
      concertID
      bandID
      createdAt
      updatedAt
      concert {
        id
        userName
        identityId
        name
        date
        venue
        genres
        description
        keyImage
        invitations
        createdAt
        updatedAt
        owner
        bands {
          nextToken
        }
        artists {
          nextToken
        }
        tickets {
          nextToken
        }
      }
      band {
        id
        userName
        identityId
        name
        genre
        keyImage
        invitations
        createdAt
        updatedAt
        owner
        members {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onDeleteConcertBandJoin = /* GraphQL */ `
  subscription OnDeleteConcertBandJoin {
    onDeleteConcertBandJoin {
      id
      concertID
      bandID
      createdAt
      updatedAt
      concert {
        id
        userName
        identityId
        name
        date
        venue
        genres
        description
        keyImage
        invitations
        createdAt
        updatedAt
        owner
        bands {
          nextToken
        }
        artists {
          nextToken
        }
        tickets {
          nextToken
        }
      }
      band {
        id
        userName
        identityId
        name
        genre
        keyImage
        invitations
        createdAt
        updatedAt
        owner
        members {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onCreateConcertArtistJoin = /* GraphQL */ `
  subscription OnCreateConcertArtistJoin {
    onCreateConcertArtistJoin {
      id
      concertID
      artistID
      createdAt
      updatedAt
      concert {
        id
        userName
        identityId
        name
        date
        venue
        genres
        description
        keyImage
        invitations
        createdAt
        updatedAt
        owner
        bands {
          nextToken
        }
        artists {
          nextToken
        }
        tickets {
          nextToken
        }
      }
      artist {
        id
        identityId
        name
        genre
        role
        createdAt
        updatedAt
        owner
        bands {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onUpdateConcertArtistJoin = /* GraphQL */ `
  subscription OnUpdateConcertArtistJoin {
    onUpdateConcertArtistJoin {
      id
      concertID
      artistID
      createdAt
      updatedAt
      concert {
        id
        userName
        identityId
        name
        date
        venue
        genres
        description
        keyImage
        invitations
        createdAt
        updatedAt
        owner
        bands {
          nextToken
        }
        artists {
          nextToken
        }
        tickets {
          nextToken
        }
      }
      artist {
        id
        identityId
        name
        genre
        role
        createdAt
        updatedAt
        owner
        bands {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onDeleteConcertArtistJoin = /* GraphQL */ `
  subscription OnDeleteConcertArtistJoin {
    onDeleteConcertArtistJoin {
      id
      concertID
      artistID
      createdAt
      updatedAt
      concert {
        id
        userName
        identityId
        name
        date
        venue
        genres
        description
        keyImage
        invitations
        createdAt
        updatedAt
        owner
        bands {
          nextToken
        }
        artists {
          nextToken
        }
        tickets {
          nextToken
        }
      }
      artist {
        id
        identityId
        name
        genre
        role
        createdAt
        updatedAt
        owner
        bands {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onCreateTicket = /* GraphQL */ `
  subscription OnCreateTicket {
    onCreateTicket {
      id
      eventName
      description
      price
      startDate
      endDate
      date
      venue
      type
      quantity
      concertID
      orders {
        items {
          id
          ticketID
          orderID
          userID
          price
          fullName
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      concert {
        id
        userName
        identityId
        name
        date
        venue
        genres
        description
        keyImage
        invitations
        createdAt
        updatedAt
        owner
        bands {
          nextToken
        }
        artists {
          nextToken
        }
        tickets {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onUpdateTicket = /* GraphQL */ `
  subscription OnUpdateTicket {
    onUpdateTicket {
      id
      eventName
      description
      price
      startDate
      endDate
      date
      venue
      type
      quantity
      concertID
      orders {
        items {
          id
          ticketID
          orderID
          userID
          price
          fullName
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      concert {
        id
        userName
        identityId
        name
        date
        venue
        genres
        description
        keyImage
        invitations
        createdAt
        updatedAt
        owner
        bands {
          nextToken
        }
        artists {
          nextToken
        }
        tickets {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onDeleteTicket = /* GraphQL */ `
  subscription OnDeleteTicket {
    onDeleteTicket {
      id
      eventName
      description
      price
      startDate
      endDate
      date
      venue
      type
      quantity
      concertID
      orders {
        items {
          id
          ticketID
          orderID
          userID
          price
          fullName
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      concert {
        id
        userName
        identityId
        name
        date
        venue
        genres
        description
        keyImage
        invitations
        createdAt
        updatedAt
        owner
        bands {
          nextToken
        }
        artists {
          nextToken
        }
        tickets {
          nextToken
        }
      }
      owner
    }
  }
`;
export const onCreateInvitation = /* GraphQL */ `
  subscription OnCreateInvitation {
    onCreateInvitation {
      email
      message
      authorID
      authorEmail
      senderTable
      senderTableElementID
      senderTableElementName
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateInvitation = /* GraphQL */ `
  subscription OnUpdateInvitation {
    onUpdateInvitation {
      email
      message
      authorID
      authorEmail
      senderTable
      senderTableElementID
      senderTableElementName
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteInvitation = /* GraphQL */ `
  subscription OnDeleteInvitation {
    onDeleteInvitation {
      email
      message
      authorID
      authorEmail
      senderTable
      senderTableElementID
      senderTableElementName
      status
      createdAt
      updatedAt
      owner
    }
  }
`;
