export const loginDoctor = async (email,password) => {

    const credentials = {
        email,
        password
    }
    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(credentials),
        mode:'cors',
        headers:{
            'Content-type':'Application/json'
        }
      }
      
    const response = await fetch("/api/doctorlogin", requestOptions)
    const {
        success,
        token,
        doctor_info

    } = await response.json()

    if(success)
    {
        localStorage.setItem('token',token)
        localStorage.setItem('user', doctor_info)
        return true
    }
    else
    {
        return false
    }
}

export const loginPatient = async (email,password) => {

    const credentials = {
        email,
        password
    }
    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(credentials),
        mode:'cors',
        headers:{
            'Content-type':'Application/json'
        }
      }
      
    const response = await fetch("/api/patientlogin", requestOptions)
    const {
        success,
        token,
        patient_info

    } = await response.json()

    if(success)
    {
        localStorage.setItem('token',token)
        localStorage.setItem('patient_info', JSON.stringify(patient_info))
        return true
    }
    else
    {
        return false
    }
}

export const loginAdmin = async (email,password) => {

    const credentials = {
        email,
        password
    }
    var requestOptions = {
        method: 'POST',
        body: JSON.stringify(credentials),
        mode:'cors',
        headers:{
            'Content-type':'Application/json'
        }
      }
      
    const response = await fetch("/api/adminlogin", requestOptions)
    const {
        success,
        token

    } = await response.json()

    if(success)
    {
        localStorage.setItem('token',token)
        return true
    }
    else
    {
        return false
    }
}