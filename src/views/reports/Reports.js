import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
const Reports = () => {
  return (
    <>
      <CForm>
        <CRow>
          <CCol xs>
            <CFormInput placeholder="First name" aria-label="First name" />
          </CCol>
          <CCol xs>
            <CFormInput placeholder="Last name" aria-label="Last name" />
          </CCol>
        </CRow>
        <CRow className="mt-4">
          <CCol xs="auto">
            <CButton type="submit">Submit</CButton>
          </CCol>
        </CRow>
      </CForm>
    </>
  )
}

export default Reports
