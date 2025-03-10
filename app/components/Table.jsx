//components are just functions that allow us to functions

function Table(props){
    return (
        <table>
            {/* Table Header 
                Table Body
                Table Footer 
            */}
            <thead>
                <tr>
                    <th>Name</th>
                    <th>URL</th>
                </tr>
            </thead>
            
            <tbody>
                <tr>
                    <td>GitHub</td>            
                    <td>http://www.github.com</td>
                </tr>
                <tr>
                   
                    <td>Google</td>            
                    <td>http://www.google.com</td>

                </tr>

                <tr>
                    <td>{props.data.name}</td>
                    <td>{props.data.URL}</td>
                </tr>
            </tbody>
        </table>

    )
}
export default Table
