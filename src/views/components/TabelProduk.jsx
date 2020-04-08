import React from "react"
import "../../App.css"
const TabelBaru = () => {
    let arr = [
        { Nama: "Lukman", Pekerjaan: "Pilot" },
        { Nama: "John Lenon", Pekerjaan: "Memancing" }
    ]
    return arr.map((val, index) => {
        return (
            <>
                <tr>
                    <th>{index + 1}</th>
                    <th>{val.Nama}</th>
                    <th>{val.Pekerjaan}</th>
                </tr>
            </>
        )
    })
}
const TabelFunction = () => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Nama</th>
                        <th>Pekerjaan</th>
                    </tr>
                </thead>
                <tbody>
                    {TabelBaru()}
                </tbody>
            </table>
        </div>
    )
}

export default TabelFunction