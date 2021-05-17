/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createConcert = /* GraphQL */ `
  mutation CreateConcert(
    $input: CreateConcertInput!
    $condition: ModelConcertConditionInput
  ) {
    createConcert(input: $input, condition: $condition) {
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
export const updateConcert = /* GraphQL */ `
  mutation UpdateConcert(
    $input: UpdateConcertInput!
    $condition: ModelConcertConditionInput
  ) {
    updateConcert(input: $input, condition: $condition) {
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
export const deleteConcert = /* GraphQL */ `
  mutation DeleteConcert(
    $input: DeleteConcertInput!
    $condition: ModelConcertConditionInput
  ) {
    deleteConcert(input: $input, condition: $condition) {
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
export const createBand = /* GraphQL */ `
  mutation CreateBand(
    $input: CreateBandInput!
    $condition: ModelBandConditionInput
  ) {
    createBand(input: $input, condition: $condition) {
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
export const updateBand = /* GraphQL */ `
  mutation UpdateBand(
    $input: UpdateBandInput!
    $condition: ModelBandConditionInput
  ) {
    updateBand(input: $input, condition: $condition) {
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
export const deleteBand = /* GraphQL */ `
  mutation DeleteBand(
    $input: DeleteBandInput!
    $condition: ModelBandConditionInput
  ) {
    deleteBand(input: $input, condition: $condition) {
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
export const createArtist = /* GraphQL */ `
  mutation CreateArtist(
    $input: CreateArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    createArtist(input: $input, condition: $condition) {
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
export const updateArtist = /* GraphQL */ `
  mutation UpdateArtist(
    $input: UpdateArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    updateArtist(input: $input, condition: $condition) {
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
export const deleteArtist = /* GraphQL */ `
  mutation DeleteArtist(
    $input: DeleteArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    deleteArtist(input: $input, condition: $condition) {
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
export const createArtistBandJoin = /* GraphQL */ `
  mutation CreateArtistBandJoin(
    $input: CreateArtistBandJoinInput!
    $condition: ModelArtistBandJoinConditionInput
  ) {
    createArtistBandJoin(input: $input, condition: $condition) {
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
export const updateArtistBandJoin = /* GraphQL */ `
  mutation UpdateArtistBandJoin(
    $input: UpdateArtistBandJoinInput!
    $condition: ModelArtistBandJoinConditionInput
  ) {
    updateArtistBandJoin(input: $input, condition: $condition) {
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
export const deleteArtistBandJoin = /* GraphQL */ `
  mutation DeleteArtistBandJoin(
    $input: DeleteArtistBandJoinInput!
    $condition: ModelArtistBandJoinConditionInput
  ) {
    deleteArtistBandJoin(input: $input, condition: $condition) {
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
export const createConcertBandJoin = /* GraphQL */ `
  mutation CreateConcertBandJoin(
    $input: CreateConcertBandJoinInput!
    $condition: ModelConcertBandJoinConditionInput
  ) {
    createConcertBandJoin(input: $input, condition: $condition) {
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
export const updateConcertBandJoin = /* GraphQL */ `
  mutation UpdateConcertBandJoin(
    $input: UpdateConcertBandJoinInput!
    $condition: ModelConcertBandJoinConditionInput
  ) {
    updateConcertBandJoin(input: $input, condition: $condition) {
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
export const deleteConcertBandJoin = /* GraphQL */ `
  mutation DeleteConcertBandJoin(
    $input: DeleteConcertBandJoinInput!
    $condition: ModelConcertBandJoinConditionInput
  ) {
    deleteConcertBandJoin(input: $input, condition: $condition) {
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
export const createConcertArtistJoin = /* GraphQL */ `
  mutation CreateConcertArtistJoin(
    $input: CreateConcertArtistJoinInput!
    $condition: ModelConcertArtistJoinConditionInput
  ) {
    createConcertArtistJoin(input: $input, condition: $condition) {
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
export const updateConcertArtistJoin = /* GraphQL */ `
  mutation UpdateConcertArtistJoin(
    $input: UpdateConcertArtistJoinInput!
    $condition: ModelConcertArtistJoinConditionInput
  ) {
    updateConcertArtistJoin(input: $input, condition: $condition) {
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
export const deleteConcertArtistJoin = /* GraphQL */ `
  mutation DeleteConcertArtistJoin(
    $input: DeleteConcertArtistJoinInput!
    $condition: ModelConcertArtistJoinConditionInput
  ) {
    deleteConcertArtistJoin(input: $input, condition: $condition) {
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
export const createTicketOrder = /* GraphQL */ `
  mutation CreateTicketOrder(
    $input: CreateTicketOrderInput!
    $condition: ModelTicketOrderConditionInput
  ) {
    createTicketOrder(input: $input, condition: $condition) {
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
export const updateTicketOrder = /* GraphQL */ `
  mutation UpdateTicketOrder(
    $input: UpdateTicketOrderInput!
    $condition: ModelTicketOrderConditionInput
  ) {
    updateTicketOrder(input: $input, condition: $condition) {
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
export const deleteTicketOrder = /* GraphQL */ `
  mutation DeleteTicketOrder(
    $input: DeleteTicketOrderInput!
    $condition: ModelTicketOrderConditionInput
  ) {
    deleteTicketOrder(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
