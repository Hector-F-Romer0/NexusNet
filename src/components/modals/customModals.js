
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

const showErrorModal = async(title,message,confirmText)=>{
    await MySwal.fire({
        title: title,
        icon: "error",
        text: message,
        confirmButtonColor: "#007BFF",
        confirmButtonText: confirmText
    });
}

const showWarningModal = async(title,message,confirmText)=>{
    await MySwal.fire({
        title: title,
        icon: "warning",
        text: message,
        confirmButtonColor: "#007BFF",
        confirmButtonText: confirmText
    });
}

export{showSuccessModal,showErrorModal,showWarningModal}
