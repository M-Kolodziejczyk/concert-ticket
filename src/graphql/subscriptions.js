/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
      email
      name
      artistID
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      bands {
        items {
          id
          userName
          identityId
          name
          genre
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      artist {
        id
        identityId
        name
        genre
        role
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        bands {
          nextToken
          startedAt
        }
      }
      ordersByDate {
        items {
          id
          customer
          userName
          status
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
          userID
        }
        nextToken
        startedAt
      }
      ordersByStatus {
        items {
          id
          customer
          userName
          status
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
          userID
        }
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      bands {
        items {
          id
          userName
          identityId
          name
          genre
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      artist {
        id
        identityId
        name
        genre
        role
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        bands {
          nextToken
          startedAt
        }
      }
      ordersByDate {
        items {
          id
          customer
          userName
          status
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
          userID
        }
        nextToken
        startedAt
      }
      ordersByStatus {
        items {
          id
          customer
          userName
          status
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
          userID
        }
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      bands {
        items {
          id
          userName
          identityId
          name
          genre
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      artist {
        id
        identityId
        name
        genre
        role
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        bands {
          nextToken
          startedAt
        }
      }
      ordersByDate {
        items {
          id
          customer
          userName
          status
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
          userID
        }
        nextToken
        startedAt
      }
      ordersByStatus {
        items {
          id
          customer
          userName
          status
          createdAt
          _version
          _deleted
          _lastChangedAt
          updatedAt
          userID
        }
        nextToken
        startedAt
      }
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      bands {
        items {
          id
          concertID
          bandID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      artists {
        items {
          id
          concertID
          artistID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      tickets {
        items {
          id
          description
          price
          startDate
          endDate
          quantity
          amount
          concertID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      bands {
        items {
          id
          concertID
          bandID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      artists {
        items {
          id
          concertID
          artistID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      tickets {
        items {
          id
          description
          price
          startDate
          endDate
          quantity
          amount
          concertID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      bands {
        items {
          id
          concertID
          bandID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      artists {
        items {
          id
          concertID
          artistID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      tickets {
        items {
          id
          description
          price
          startDate
          endDate
          quantity
          amount
          concertID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      members {
        items {
          id
          bandID
          artistID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      members {
        items {
          id
          bandID
          artistID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      members {
        items {
          id
          bandID
          artistID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      bands {
        items {
          id
          bandID
          artistID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      bands {
        items {
          id
          bandID
          artistID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
      bands {
        items {
          id
          bandID
          artistID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      band {
        id
        userName
        identityId
        name
        genre
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        members {
          nextToken
          startedAt
        }
      }
      artist {
        id
        identityId
        name
        genre
        role
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        bands {
          nextToken
          startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      band {
        id
        userName
        identityId
        name
        genre
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        members {
          nextToken
          startedAt
        }
      }
      artist {
        id
        identityId
        name
        genre
        role
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        bands {
          nextToken
          startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      band {
        id
        userName
        identityId
        name
        genre
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        members {
          nextToken
          startedAt
        }
      }
      artist {
        id
        identityId
        name
        genre
        role
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        bands {
          nextToken
          startedAt
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        bands {
          nextToken
          startedAt
        }
        artists {
          nextToken
          startedAt
        }
        tickets {
          nextToken
          startedAt
        }
      }
      band {
        id
        userName
        identityId
        name
        genre
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        members {
          nextToken
          startedAt
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        bands {
          nextToken
          startedAt
        }
        artists {
          nextToken
          startedAt
        }
        tickets {
          nextToken
          startedAt
        }
      }
      band {
        id
        userName
        identityId
        name
        genre
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        members {
          nextToken
          startedAt
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        bands {
          nextToken
          startedAt
        }
        artists {
          nextToken
          startedAt
        }
        tickets {
          nextToken
          startedAt
        }
      }
      band {
        id
        userName
        identityId
        name
        genre
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        members {
          nextToken
          startedAt
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        bands {
          nextToken
          startedAt
        }
        artists {
          nextToken
          startedAt
        }
        tickets {
          nextToken
          startedAt
        }
      }
      artist {
        id
        identityId
        name
        genre
        role
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        bands {
          nextToken
          startedAt
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        bands {
          nextToken
          startedAt
        }
        artists {
          nextToken
          startedAt
        }
        tickets {
          nextToken
          startedAt
        }
      }
      artist {
        id
        identityId
        name
        genre
        role
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        bands {
          nextToken
          startedAt
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        bands {
          nextToken
          startedAt
        }
        artists {
          nextToken
          startedAt
        }
        tickets {
          nextToken
          startedAt
        }
      }
      artist {
        id
        identityId
        name
        genre
        role
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        bands {
          nextToken
          startedAt
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
      description
      price
      startDate
      endDate
      quantity
      amount
      concertID
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        bands {
          nextToken
          startedAt
        }
        artists {
          nextToken
          startedAt
        }
        tickets {
          nextToken
          startedAt
        }
      }
      owner
      orders {
        items {
          id
          ticketID
          orderID
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        bands {
          nextToken
          startedAt
        }
        artists {
          nextToken
          startedAt
        }
        tickets {
          nextToken
          startedAt
        }
      }
      owner
      orders {
        items {
          id
          ticketID
          orderID
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
        bands {
          nextToken
          startedAt
        }
        artists {
          nextToken
          startedAt
        }
        tickets {
          nextToken
          startedAt
        }
      }
      owner
      orders {
        items {
          id
          ticketID
          orderID
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        owner
        orders {
          nextToken
          startedAt
        }
      }
      order {
        id
        customer
        userName
        status
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
        tickets {
          nextToken
          startedAt
        }
        userID
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        owner
        orders {
          nextToken
          startedAt
        }
      }
      order {
        id
        customer
        userName
        status
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
        tickets {
          nextToken
          startedAt
        }
        userID
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
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        owner
        orders {
          nextToken
          startedAt
        }
      }
      order {
        id
        customer
        userName
        status
        createdAt
        _version
        _deleted
        _lastChangedAt
        updatedAt
        tickets {
          nextToken
          startedAt
        }
        userID
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
      createdAt
      _version
      _deleted
      _lastChangedAt
      updatedAt
      tickets {
        items {
          id
          ticketID
          orderID
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
      createdAt
      _version
      _deleted
      _lastChangedAt
      updatedAt
      tickets {
        items {
          id
          ticketID
          orderID
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
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
      createdAt
      _version
      _deleted
      _lastChangedAt
      updatedAt
      tickets {
        items {
          id
          ticketID
          orderID
          userID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      userID
    }
  }
`;
