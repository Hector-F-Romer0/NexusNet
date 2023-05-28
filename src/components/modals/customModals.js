
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


const showSuccessModal = async(title,message,confirmText)=>{
    await MySwal.fire({
        title: title,
        icon: "success",
        text: message,
        confirmButtonColor: "#007BFF",
        confirmButtonText: confirmText,
    });
}

export{showSuccessModal}
