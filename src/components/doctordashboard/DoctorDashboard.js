// Show patients he has appointment with today
// Shows patients requesting an appointment
// Doctor can select a patient

import './styles.css'
import React,{useState} from 'react' 
import IpsContainer from '../ipscontainer/IpsContainer'
import MedicationSummary from '../ipscollectives/medicationsummary/MedicationSummary'
import { toast } from 'react-toastify'
import { getPatientInfo } from '../../utilities/PatientUtility'

const DoctorDashboard = ({
    selectedIPSCollective,
    setSelectedIPSCollective
}) => {
    const [patientEmail, setPatientEmail] = useState("")
    const [patientInfo, setPatientInfo] = useState({
        name:'',
        age:'',
        gender:'',
        contact:''
    })
    const handleClick = () => {
        console.log('Search Button Clicked')
    }
    
    const createPrescription = () => {
        if(localStorage.getItem('patient_info') === null)
            toast("You need to search a patient first")
        else
            window.location.href = '/prescription'
    }
    const setPatientContext = async () => {
        var result = await getPatientInfo(patientEmail)
        if(result)
        {

            toast("Patient successfully identified")
            var temp = JSON.parse(localStorage.getItem('patient_info'))
            setPatientInfo({
                ...patientInfo,
                name: temp.name,
                age:temp.age,
                gender:temp.gender,
                contact:temp.contact
            })

        }
        else
        {
            toast("No such patient identified")
        }
            
    }
    return(
        <div className='main_container'>
            <div className='heading_picture'>
            </div>
            <div className='patient_info_1'>
                <div className='search_form_container'>
                    <div>
                        <h1>Enter patient's email</h1>
                    </div>
                    <div>
                        <input onChange={e => setPatientEmail(e.target.value)}></input>
                    </div>
                    <div>
                        <button onClick={setPatientContext} className='search_btn'>Search Patient</button>
                    </div>
                </div>
                <div className='search_form_container'>
                    <div>
                        <h3>Patient Name: {patientInfo.name}</h3>
                        <h3>Patient Age: {patientInfo.age}</h3>
                        <h3>Patient Gender: {patientInfo.gender}</h3>
                        <h3>Patient Contact: {patientInfo.contact}</h3>
                    </div>
                </div>
            </div>
            <div className='patient_info_container'>
                <div className='section_1'>
                    <button onClick={createPrescription}>Create Prescription</button>
                </div>
                <div className='section_2'>
                    <IpsContainer setSelectedIPSCollective={setSelectedIPSCollective}
                                  selectedIPSCollective={selectedIPSCollective}
                    />
                </div>
            </div>
        </div>
    )
}
export default DoctorDashboard;