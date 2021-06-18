import React from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import {
  Page,
  Text,
  View,
  Image,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import { format } from "date-fns";
import "./ticket-generator.styles.scss";

const styles = StyleSheet.create({
  page: {
    width: "100%",
    height: "100%",
    position: "relative",
    margin: 0,
  },

  image: {
    top: 0,
    left: 0,
    position: "absolute",
    zIndex: 0,
    width: "100%",
    height: "100%",
  },
  header: {
    marginTop: 10,
    marginLeft: 10,
    paddingRight: 28,
    width: "100%",
    flexDirection: "row",
  },
  venue: {
    color: "#F0EFEB",
    flexGrow: 1,
  },
  date: {
    marginRight: 10,
    color: "#F0EFEB",
  },
  section: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    flexDirection: "row",
  },
  type: {
    color: "#F0EFEB",
    flexGrow: 1,
  },
  price: {
    color: "#F0EFEB",
  },
  event: {
    marginTop: 5,
    fontSize: 40,
    textAlign: "center",
    color: "#F0EFEB",
  },
  name: {
    marginLeft: 10,
    marginTop: 40,
    color: "#F0EFEB",
  },
  id: {
    wdidth: "100%",
    marginTop: 10,
    paddingRight: 40,
    marginLeft: "auto",
    fontSize: 10,
    color: "#F0EFEB",
  },
});

const TicketGenerator = ({ ticket }) => {
  const PdfGenerator = () => (
    <Document>
      <Page object-fit="fill" size={[600, 200]} style={styles.page}>
        <Image
          style={styles.image}
          src="https://concertticket0ec39b2f2bf64af1a05b2f5d8040047b112252-devv.s3.eu-central-1.amazonaws.com/public/crowd_background.jpg"
        />
        <View style={styles.view}>
          <View style={styles.header}>
            <View style={styles.venue}>
              <Text style={styles.a}>{ticket.ticket.venue}</Text>
            </View>
            <View style={styles.date}>
              <Text style={styles.a}>
                {format(new Date(ticket.ticket.date), "MMMM d Y, H:mm")}
              </Text>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.type}>{ticket.ticket.type}</Text>
            <Text style={styles.price}>{ticket.ticket.price} $</Text>
          </View>

          <Text style={styles.event}>{ticket.ticket.eventName}</Text>
          <Text style={styles.name}>{ticket.fullName}</Text>
          <Text style={styles.id}>{ticket.id}</Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <div className="ticket-generator">
      <PDFDownloadLink document={<PdfGenerator />} fileName="ticket.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Loading document..." : "Download now!"
        }
      </PDFDownloadLink>
    </div>
  );
};

export default TicketGenerator;
