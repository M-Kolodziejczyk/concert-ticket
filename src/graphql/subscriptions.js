/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTicketOrder = /* GraphQL */ `
  subscription OnCreateTicketOrder($customerID: String) {
    onCreateTicketOrder(customerID: $customerID) {
      id
      ticketID
      orderID
      customerID
      order {
        id
        customer
        customerID
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
        customerID
      }
    }
  }
`;
export const onUpdateTicketOrder = /* GraphQL */ `
  subscription OnUpdateTicketOrder($customerID: String) {
    onUpdateTicketOrder(customerID: $customerID) {
      id
      ticketID
      orderID
      customerID
      order {
        id
        customer
        customerID
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
        customerID
      }
    }
  }
`;
export const onDeleteTicketOrder = /* GraphQL */ `
  subscription OnDeleteTicketOrder($customerID: String) {
    onDeleteTicketOrder(customerID: $customerID) {
      id
      ticketID
      orderID
      customerID
      order {
        id
        customer
        customerID
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
        customerID
      }
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($customerID: String) {
    onCreateOrder(customerID: $customerID) {
      id
      customer
      customerID
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
  subscription OnUpdateOrder($customerID: String) {
    onUpdateOrder(customerID: $customerID) {
      id
      customer
      customerID
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
  subscription OnDeleteOrder($customerID: String) {
    onDeleteOrder(customerID: $customerID) {
      id
      customer
      customerID
      status
      createdAt
      tickets {
        nextToken
      }
      updatedAt
    }
  }
`;
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer($id: String) {
    onCreateCustomer(id: $id) {
      id
      name
      email
      ordersByDate {
        nextToken
      }
      ordersByStatus {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer($id: String) {
    onUpdateCustomer(id: $id) {
      id
      name
      email
      ordersByDate {
        nextToken
      }
      ordersByStatus {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer($id: String) {
    onDeleteCustomer(id: $id) {
      id
      name
      email
      ordersByDate {
        nextToken
      }
      ordersByStatus {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateConcert = /* GraphQL */ `
  subscription OnCreateConcert {
    onCreateConcert {
      id
      name
      date
      venue
      genres
      createdAt
      updatedAt
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
      name
      date
      venue
      genres
      createdAt
      updatedAt
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
      name
      date
      venue
      genres
      createdAt
      updatedAt
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
      owner
      name
      genre
      createdAt
      updatedAt
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
      owner
      name
      genre
      createdAt
      updatedAt
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
      owner
      name
      genre
      createdAt
      updatedAt
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
      owner
      name
      genre
      role
      createdAt
      updatedAt
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
      owner
      name
      genre
      role
      createdAt
      updatedAt
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
      owner
      name
      genre
      role
      createdAt
      updatedAt
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
        owner
        name
        genre
        createdAt
        updatedAt
      }
      artist {
        id
        owner
        name
        genre
        role
        createdAt
        updatedAt
      }
      customerID
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
        owner
        name
        genre
        createdAt
        updatedAt
      }
      artist {
        id
        owner
        name
        genre
        role
        createdAt
        updatedAt
      }
      customerID
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
        owner
        name
        genre
        createdAt
        updatedAt
      }
      artist {
        id
        owner
        name
        genre
        role
        createdAt
        updatedAt
      }
      customerID
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
        name
        date
        venue
        genres
        createdAt
        updatedAt
      }
      band {
        id
        owner
        name
        genre
        createdAt
        updatedAt
      }
      customerID
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
        name
        date
        venue
        genres
        createdAt
        updatedAt
      }
      band {
        id
        owner
        name
        genre
        createdAt
        updatedAt
      }
      customerID
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
        name
        date
        venue
        genres
        createdAt
        updatedAt
      }
      band {
        id
        owner
        name
        genre
        createdAt
        updatedAt
      }
      customerID
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
        name
        date
        venue
        genres
        createdAt
        updatedAt
      }
      artist {
        id
        owner
        name
        genre
        role
        createdAt
        updatedAt
      }
      customerID
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
        name
        date
        venue
        genres
        createdAt
        updatedAt
      }
      artist {
        id
        owner
        name
        genre
        role
        createdAt
        updatedAt
      }
      customerID
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
        name
        date
        venue
        genres
        createdAt
        updatedAt
      }
      artist {
        id
        owner
        name
        genre
        role
        createdAt
        updatedAt
      }
      customerID
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
        name
        date
        venue
        genres
        createdAt
        updatedAt
      }
      customerID
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
        name
        date
        venue
        genres
        createdAt
        updatedAt
      }
      customerID
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
        name
        date
        venue
        genres
        createdAt
        updatedAt
      }
      customerID
    }
  }
`;
