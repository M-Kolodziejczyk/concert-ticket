/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
      id
      name
      email
      artistID
      ordersByDate {
        nextToken
      }
      ordersByStatus {
        nextToken
      }
      createdAt
      updatedAt
      owner
      concerts {
        nextToken
      }
      bands {
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
      }
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
      id
      name
      email
      artistID
      ordersByDate {
        nextToken
      }
      ordersByStatus {
        nextToken
      }
      createdAt
      updatedAt
      owner
      concerts {
        nextToken
      }
      bands {
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
      }
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
      id
      name
      email
      artistID
      ordersByDate {
        nextToken
      }
      ordersByStatus {
        nextToken
      }
      createdAt
      updatedAt
      owner
      concerts {
        nextToken
      }
      bands {
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
      order {
        id
        customer
        userID
        status
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      ticket {
        id
        description
        price
        startDate
        endDate
        quantity
        amount
        concertID
        createdAt
        updatedAt
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
      order {
        id
        customer
        userID
        status
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      ticket {
        id
        description
        price
        startDate
        endDate
        quantity
        amount
        concertID
        createdAt
        updatedAt
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
      order {
        id
        customer
        userID
        status
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      ticket {
        id
        description
        price
        startDate
        endDate
        quantity
        amount
        concertID
        createdAt
        updatedAt
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
      userID
      status
      createdAt
      tickets {
        nextToken
      }
      updatedAt
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($userID: String) {
    onUpdateOrder(userID: $userID) {
      id
      customer
      userID
      status
      createdAt
      tickets {
        nextToken
      }
      updatedAt
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($userID: String) {
    onDeleteOrder(userID: $userID) {
      id
      customer
      userID
      status
      createdAt
      tickets {
        nextToken
      }
      updatedAt
    }
  }
`;
export const onCreateConcert = /* GraphQL */ `
  subscription OnCreateConcert {
    onCreateConcert {
      id
      userID
      identityId
      name
      date
      venue
      genres
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
  }
`;
export const onUpdateConcert = /* GraphQL */ `
  subscription OnUpdateConcert {
    onUpdateConcert {
      id
      userID
      identityId
      name
      date
      venue
      genres
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
  }
`;
export const onDeleteConcert = /* GraphQL */ `
  subscription OnDeleteConcert {
    onDeleteConcert {
      id
      userID
      identityId
      name
      date
      venue
      genres
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
  }
`;
export const onCreateBand = /* GraphQL */ `
  subscription OnCreateBand {
    onCreateBand {
      id
      userID
      identityId
      name
      genre
      createdAt
      updatedAt
      owner
      members {
        nextToken
      }
    }
  }
`;
export const onUpdateBand = /* GraphQL */ `
  subscription OnUpdateBand {
    onUpdateBand {
      id
      userID
      identityId
      name
      genre
      createdAt
      updatedAt
      owner
      members {
        nextToken
      }
    }
  }
`;
export const onDeleteBand = /* GraphQL */ `
  subscription OnDeleteBand {
    onDeleteBand {
      id
      userID
      identityId
      name
      genre
      createdAt
      updatedAt
      owner
      members {
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
        userID
        identityId
        name
        genre
        createdAt
        updatedAt
        owner
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
        userID
        identityId
        name
        genre
        createdAt
        updatedAt
        owner
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
        userID
        identityId
        name
        genre
        createdAt
        updatedAt
        owner
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
        userID
        identityId
        name
        date
        venue
        genres
        createdAt
        updatedAt
        owner
      }
      band {
        id
        userID
        identityId
        name
        genre
        createdAt
        updatedAt
        owner
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
        userID
        identityId
        name
        date
        venue
        genres
        createdAt
        updatedAt
        owner
      }
      band {
        id
        userID
        identityId
        name
        genre
        createdAt
        updatedAt
        owner
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
        userID
        identityId
        name
        date
        venue
        genres
        createdAt
        updatedAt
        owner
      }
      band {
        id
        userID
        identityId
        name
        genre
        createdAt
        updatedAt
        owner
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
        userID
        identityId
        name
        date
        venue
        genres
        createdAt
        updatedAt
        owner
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
        userID
        identityId
        name
        date
        venue
        genres
        createdAt
        updatedAt
        owner
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
        userID
        identityId
        name
        date
        venue
        genres
        createdAt
        updatedAt
        owner
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
      }
      owner
    }
  }
`;
export const onCreateTicket = /* GraphQL */ `
  subscription OnCreateTicket {
    onCreateTicket {
      id
      description
      price
      startDate
      endDate
      quantity
      amount
      concertID
      orders {
        nextToken
      }
      createdAt
      updatedAt
      concert {
        id
        userID
        identityId
        name
        date
        venue
        genres
        createdAt
        updatedAt
        owner
      }
      owner
    }
  }
`;
export const onUpdateTicket = /* GraphQL */ `
  subscription OnUpdateTicket {
    onUpdateTicket {
      id
      description
      price
      startDate
      endDate
      quantity
      amount
      concertID
      orders {
        nextToken
      }
      createdAt
      updatedAt
      concert {
        id
        userID
        identityId
        name
        date
        venue
        genres
        createdAt
        updatedAt
        owner
      }
      owner
    }
  }
`;
export const onDeleteTicket = /* GraphQL */ `
  subscription OnDeleteTicket {
    onDeleteTicket {
      id
      description
      price
      startDate
      endDate
      quantity
      amount
      concertID
      orders {
        nextToken
      }
      createdAt
      updatedAt
      concert {
        id
        userID
        identityId
        name
        date
        venue
        genres
        createdAt
        updatedAt
        owner
      }
      owner
    }
  }
`;
