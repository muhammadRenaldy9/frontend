import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListKontak } from '../../actions/kontakAction'

function FolderRedux1() {

    const { getListKontakResult, getListKontakLoading, getListKontakError } = useSelector((state) => state.KontakReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        // panggil action getListkontak
        console.log('1. use Effect component did mount', );
        dispatch(getListKontak())
    }, [dispatch])

  return (
    <div>
      FolderRedux1 dalam folder Redux1
      {getListKontakResult ? (getListKontakResult.map((kontak) => {
        return (
          <p key={kontak.id}>{kontak.nama} - {kontak.nohp}</p>
        )
      })
      ) : getListKontakLoading ? (
          <p>loading...</p>
      ) : (
          <p>{getListKontakError ? getListKontakError : "Data Kosong /error"}</p>
      )}
    </div>
  )
}

export default FolderRedux1

// consume store/statenya