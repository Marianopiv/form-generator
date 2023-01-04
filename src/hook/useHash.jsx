import { useState } from "react";
import sign from "jwt-encode";
import Swal from "sweetalert2";

const useHash = () => {
  const [jwt, setJwt] = useState(null);

  const generarJson = (capturedValue) => {
    const secret = "salchichagruesa";
    const jwt = sign(capturedValue, secret);
    setJwt(jwt);
    Swal.fire({
        icon: 'success',
        title: 'Data Encrypted',
      })
  };

  function downloadTxt(text, fileName) {
    const element = document.createElement('a');
    const file = new Blob([text], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    element.click();
  }

  return { generarJson, downloadTxt,jwt };
};

export default useHash;
