/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createConcert = /* GraphQL */ `
  mutation CreateConcert(
    $input: CreateConcertInput!
    $condition: ModelConcertConditionInput
  ) {
    createConcert(input: $input, condition: $condition) {
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
export const updateConcert = /* GraphQL */ `
  mutation UpdateConcert(
    $input: UpdateConcertInput!
    $condition: ModelConcertConditionInput
  ) {
    updateConcert(input: $input, condition: $condition) {
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
export const deleteConcert = /* GraphQL */ `
  mutation DeleteConcert(
    $input: DeleteConcertInput!
    $condition: ModelConcertConditionInput
  ) {
    deleteConcert(input: $input, condition: $condition) {
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
export const createBand = /* GraphQL */ `
  mutation CreateBand(
    $input: CreateBandInput!
    $condition: ModelBandConditionInput
  ) {
    createBand(input: $input, condition: $condition) {
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
export const updateBand = /* GraphQL */ `
  mutation UpdateBand(
    $input: UpdateBandInput!
    $condition: ModelBandConditionInput
  ) {
    updateBand(input: $input, condition: $condition) {
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
export const deleteBand = /* GraphQL */ `
  mutation DeleteBand(
    $input: DeleteBandInput!
    $condition: ModelBandConditionInput
  ) {
    deleteBand(input: $input, condition: $condition) {
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
export const createArtist = /* GraphQL */ `
  mutation CreateArtist(
    $input: CreateArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    createArtist(input: $input, condition: $condition) {
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
export const updateArtist = /* GraphQL */ `
  mutation UpdateArtist(
    $input: UpdateArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    updateArtist(input: $input, condition: $condition) {
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
export const deleteArtist = /* GraphQL */ `
  mutation DeleteArtist(
    $input: DeleteArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    deleteArtist(input: $input, condition: $condition) {
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
export const createArtistBandJoin = /* GraphQL */ `
  mutation CreateArtistBandJoin(
    $input: CreateArtistBandJoinInput!
    $condition: ModelArtistBandJoinConditionInput
  ) {
    createArtistBandJoin(input: $input, condition: $condition) {
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
export const updateArtistBandJoin = /* GraphQL */ `
  mutation UpdateArtistBandJoin(
    $input: UpdateArtistBandJoinInput!
    $condition: ModelArtistBandJoinConditionInput
  ) {
    updateArtistBandJoin(input: $input, condition: $condition) {
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
export const deleteArtistBandJoin = /* GraphQL */ `
  mutation DeleteArtistBandJoin(
    $input: DeleteArtistBandJoinInput!
    $condition: ModelArtistBandJoinConditionInput
  ) {
    deleteArtistBandJoin(input: $input, condition: $condition) {
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
export const createConcertBandJoin = /* GraphQL */ `
  mutation CreateConcertBandJoin(
    $input: CreateConcertBandJoinInput!
    $condition: ModelConcertBandJoinConditionInput
  ) {
    createConcertBandJoin(input: $input, condition: $condition) {
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
export const updateConcertBandJoin = /* GraphQL */ `
  mutation UpdateConcertBandJoin(
    $input: UpdateConcertBandJoinInput!
    $condition: ModelConcertBandJoinConditionInput
  ) {
    updateConcertBandJoin(input: $input, condition: $condition) {
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
export const deleteConcertBandJoin = /* GraphQL */ `
  mutation DeleteConcertBandJoin(
    $input: DeleteConcertBandJoinInput!
    $condition: ModelConcertBandJoinConditionInput
  ) {
    deleteConcertBandJoin(input: $input, condition: $condition) {
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
export const createConcertArtistJoin = /* GraphQL */ `
  mutation CreateConcertArtistJoin(
    $input: CreateConcertArtistJoinInput!
    $condition: ModelConcertArtistJoinConditionInput
  ) {
    createConcertArtistJoin(input: $input, condition: $condition) {
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
export const updateConcertArtistJoin = /* GraphQL */ `
  mutation UpdateConcertArtistJoin(
    $input: UpdateConcertArtistJoinInput!
    $condition: ModelConcertArtistJoinConditionInput
  ) {
    updateConcertArtistJoin(input: $input, condition: $condition) {
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
export const deleteConcertArtistJoin = /* GraphQL */ `
  mutation DeleteConcertArtistJoin(
    $input: DeleteConcertArtistJoinInput!
    $condition: ModelConcertArtistJoinConditionInput
  ) {
    deleteConcertArtistJoin(input: $input, condition: $condition) {
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
export const createTicket = /* GraphQL */ `
  mutation CreateTicket(
    $input: CreateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    createTicket(input: $input, condition: $condition) {
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
export const updateTicket = /* GraphQL */ `
  mutation UpdateTicket(
    $input: UpdateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    updateTicket(input: $input, condition: $condition) {
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
export const deleteTicket = /* GraphQL */ `
  mutation DeleteTicket(
    $input: DeleteTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    deleteTicket(input: $input, condition: $condition) {
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
export const createTicketOrder = /* GraphQL */ `
  mutation CreateTicketOrder(
    $input: CreateTicketOrderInput!
    $condition: ModelTicketOrderConditionInput
  ) {
    createTicketOrder(input: $input, condition: $condition) {
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
export const updateTicketOrder = /* GraphQL */ `
  mutation UpdateTicketOrder(
    $input: UpdateTicketOrderInput!
    $condition: ModelTicketOrderConditionInput
  ) {
    updateTicketOrder(input: $input, condition: $condition) {
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
export const deleteTicketOrder = /* GraphQL */ `
  mutation DeleteTicketOrder(
    $input: DeleteTicketOrderInput!
    $condition: ModelTicketOrderConditionInput
  ) {
    deleteTicketOrder(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
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
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
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
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
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
