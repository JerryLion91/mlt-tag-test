const styles = {
  // Gerenal styles
  btnFilledPurple: {
    margin: '25px 0px 5px 0px',
    padding: '10px 40px',
    borderRadius: '5px',
    color: 'white',
    fontWeight: '500',
    fontFamily: 'Asap , sans-serif',
    backgroundColor: '#882aa2',
    alignSelf: 'stretch',
  },
  btnUnfilledGray: {
    color: '#7a7a7a',
    fontFamily: 'Asap',
  },
  btnUnfilledColor: {
    color: '#882aa2',
    fontFamily: 'Asap',
    fontWeight: '700',
  },
  divFlexColumn: {
    minWidth: '150px',
    maxWidth: '400px',
    width: '80vw',
    margin: '5vh auto',
    display: 'flex',
    flex: '1 0 auto',
    flexDirection: 'column',
  },
  divFlexRow: {
    minWidth: '150px',
    maxWidth: '400px',
    width: '80vw',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  lineStyle: {
    minWidth: '300px',
    maxWidth: '600px',
    width: '50vw',
    height: '2px',
    backgroundColor: '#e5e8ea',
  },
  // loadind page styles
  loadingGif: {
    margin: 'auto',
    width: '20vw',
    maxWidth: '180px',
  },
  // login page styles
  loginHeader: {
    flex: '0 0 auto',
    marginTop: '5vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: '#520369',
    fontFamily: "'Quicksand', sans-serif",
  },
  loginHeading1: {
    color: '#37474f',
    fontFamily: 'Quicksand',
    fontWeight: 650,
    margin: '10px 0px',
    fontSize: 'calc(23px + 1vmin)',
    textAlign: 'left',
  },
  loginHeading2: {
    color: '#7a7a7a',
    fontfamily: 'Asap',
    fontWeight: 400,
    fontSize: 'calc(10px + 1vmin)',
    textAlign: 'left',
    margin: '10px 0px 50px 0px',
  },
  // register page styles
  divStyle: {
    display: 'flex',
    minWidth: '150px',
    maxWidth: '400px',
    width: '40vw',
  },
  // tag constructor page styles

  // tag sumary page styles
  cardParent: {
    fontSize: 'calc(8px + 1vmin)', //'calc(10px + 1vmin)' is in the body
    minWidth: '150px',
    maxWidth: '400px',
    width: '80vw',
    margin: '10px 0px 5px 0px',
    padding: '10px 5px 1px 10px',
    border: 'solid 2px #DCDCDC',
    borderRadius: '20px',
    color: '#882aa2',
    fontFamily: 'Asap',
    fontWeight: '600',
  },
  card: {
    width: '90%',
    margin: '5px 5%',
    display: 'flex',
    flexDirection: 'column',
  },
  // user addresses page styles

  // user orders page styles

  // modal styles
  modalFlexColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    color: '#882aa2',
    fontFamily: 'Asap',
    fontWeight: '600',
  },
  modalButton: {
    margin: '50px',
    padding: '12px',
    borderRadius: '5px',
    color: 'white',
    fontWeight: '500',
    fontFamily: 'Asap , sans-serif',
    backgroundColor: '#882aa2',
  },
};

export default styles;
