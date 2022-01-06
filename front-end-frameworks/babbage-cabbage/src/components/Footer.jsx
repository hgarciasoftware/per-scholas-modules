function Footer(props) {
  return (
    <div>
      <h1>{props.storeHours}</h1>
      <h1>{props.storeLocation}</h1>
      <h1>{props.storePhone}</h1>
    </div>
  );
}

export default Footer;
