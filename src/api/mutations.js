/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const acceptInvitation = /* GraphQL */ `
  mutation AcceptInvitation(
    $bandID: ID
    $artistID: ID
    $invitationEmail: String
    $invitationCreatedAt: String
  ) {
    acceptInvitation(
      bandID: $bandID
      artistID: $artistID
      invitationEmail: $invitationEmail
      invitationCreatedAt: $invitationCreatedAt
    )
  }
`;
export const rejectInvitation = /* GraphQL */ `
  mutation RejectInvitation(
    $bandID: ID
    $invitationEmail: String
    $invitationCreatedAt: String
  ) {
    rejectInvitation(
      bandID: $bandID
      invitationEmail: $invitationEmail
      invitationCreatedAt: $invitationCreatedAt
    )
  }
`;
export const acceptConcertInvitation = /* GraphQL */ `
  mutation AcceptConcertInvitation(
    $concertID: ID
    $bandID: ID
    $invitationEmail: String
    $invitationCreatedAt: String
  ) {
    acceptConcertInvitation(
      concertID: $concertID
      bandID: $bandID
      invitationEmail: $invitationEmail
      invitationCreatedAt: $invitationCreatedAt
    )
  }
`;
export const rejectConcertInvitation = /* GraphQL */ `
  mutation RejectConcertInvitation(
    $concertID: ID
    $invitationEmail: String
    $invitationCreatedAt: String
  ) {
    rejectConcertInvitation(
      concertID: $concertID
      invitationEmail: $invitationEmail
      invitationCreatedAt: $invitationCreatedAt
    )
  }
`;
export const processOrder = /* GraphQL */ `
  mutation ProcessOrder($input: ProcessOrderInput!) {
    processOrder(input: $input)
  }
`;
export const processPayment = /* GraphQL */ `
  mutation ProcessPayment($input: ProcessPaymentInput!) {
    processPayment(input: $input)
  }
`;
export const delteAccount = /* GraphQL */ `
  mutation DelteAccount($userName: String, $email: String) {
    delteAccount(userName: $userName, email: $email)
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      email
      name
      artistID
      createdAt
      updatedAt
      owner
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
      createdAt
      updatedAt
      owner
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
          description
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
        description
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
      description
      keyImage
      invitations
      createdAt
      updatedAt
      owner
      bands {
        items {
          band {
            id
            name
            genre
          }
        }
      }
      artists {
        items {
          artist {
            id
            name
            genre
            role
          }
        }
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
        }
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
      description
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
      concerts {
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
      description
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
      concerts {
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
      description
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
      concerts {
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
      description
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
export const updateArtist = /* GraphQL */ `
  mutation UpdateArtist(
    $input: UpdateArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    updateArtist(input: $input, condition: $condition) {
      id
      identityId
      name
      description
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
export const deleteArtist = /* GraphQL */ `
  mutation DeleteArtist(
    $input: DeleteArtistInput!
    $condition: ModelArtistConditionInput
  ) {
    deleteArtist(input: $input, condition: $condition) {
      id
      identityId
      name
      description
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
        userName
        identityId
        name
        genre
        description
        keyImage
        invitations
        createdAt
        updatedAt
        owner
        members {
          nextToken
        }
        concerts {
          nextToken
        }
      }
      artist {
        id
        identityId
        name
        description
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
        userName
        identityId
        name
        genre
        description
        keyImage
        invitations
        createdAt
        updatedAt
        owner
        members {
          nextToken
        }
        concerts {
          nextToken
        }
      }
      artist {
        id
        identityId
        name
        description
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
        description
        keyImage
        invitations
        createdAt
        updatedAt
        owner
        members {
          nextToken
        }
        concerts {
          nextToken
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
        description
        keyImage
        invitations
        createdAt
        updatedAt
        owner
        members {
          nextToken
        }
        concerts {
          nextToken
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
      createdAt
      updatedAt
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
        description
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
        description
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
        description
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
export const createTicket = /* GraphQL */ `
  mutation CreateTicket(
    $input: CreateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    createTicket(input: $input, condition: $condition) {
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
  }
`;
export const updateTicket = /* GraphQL */ `
  mutation UpdateTicket(
    $input: UpdateTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    updateTicket(input: $input, condition: $condition) {
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
  }
`;
export const deleteTicket = /* GraphQL */ `
  mutation DeleteTicket(
    $input: DeleteTicketInput!
    $condition: ModelTicketConditionInput
  ) {
    deleteTicket(input: $input, condition: $condition) {
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
  }
`;
export const createTicketOrder = /* GraphQL */ `
  mutation CreateTicketOrder(
    $input: CreateTicketOrderInput!
    $condition: ModelTicketOrderConditionInput
  ) {
    createTicketOrder(input: $input, condition: $condition) {
      id
      userID
      orderID
      ticketID
      fullName
      event
      type
      date
      price
      venue
      createdAt
      updatedAt
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
      userID
      orderID
      ticketID
      fullName
      event
      type
      date
      price
      venue
      createdAt
      updatedAt
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
      userID
      orderID
      ticketID
      fullName
      event
      type
      date
      price
      venue
      createdAt
      updatedAt
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
      stripeIntentID
      total
      createdAt
      updatedAt
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
      stripeIntentID
      total
      createdAt
      updatedAt
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
      stripeIntentID
      total
      createdAt
      updatedAt
      userID
    }
  }
`;
export const createInvitation = /* GraphQL */ `
  mutation CreateInvitation(
    $input: CreateInvitationInput!
    $condition: ModelInvitationConditionInput
  ) {
    createInvitation(input: $input, condition: $condition) {
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
export const updateInvitation = /* GraphQL */ `
  mutation UpdateInvitation(
    $input: UpdateInvitationInput!
    $condition: ModelInvitationConditionInput
  ) {
    updateInvitation(input: $input, condition: $condition) {
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
export const deleteInvitation = /* GraphQL */ `
  mutation DeleteInvitation(
    $input: DeleteInvitationInput!
    $condition: ModelInvitationConditionInput
  ) {
    deleteInvitation(input: $input, condition: $condition) {
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
