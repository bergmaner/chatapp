const style = theme => ({
  
    paper: {
     
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width:'40vw',
        minWidth:'400px',
        position: 'absolute',
        top: '50%',
        left: 'calc(50% + 150px)',
        transform: 'translate(-50%, -50%)'
        
      },
      form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
      },
      submit: {
        margin: theme.spacing(3, 0, 2),
        padding:theme.spacing(3),
        fontSize:'2em'
      }
});
  
  export default style;