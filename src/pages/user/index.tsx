

const User = () => {
  return (
    <div className="bg-light min-vh-100 font-sans">
      
            <div className="container py-4">
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-primary">Invoices</button>
                        
                    </div>
                <header className="d-flex justify-content-between align-items-center mb-4">
                    <h1 className="display-6">Welcome User</h1>
                    <input type='text' placeholder='Search'/>
                </header>

                <div className="row">
                    <div className="col-lg-8 mb-4">
                        <section className="bg-white p-4 rounded shadow-sm mb-4">
                            <h2 className="h5 mb-3">Sales</h2>
                            <div className="d-flex align-items-center justify-content-center bg-light rounded h-100" style={{ height: '250px' }}>
                             
                            </div>
                        </section>

                        <section className="bg-white p-4 rounded shadow-sm">
                            <h2 className="h5 mb-3">Recently Paid Invoice</h2>
                            <table className="table table-bordered">
                                <thead className="table-light">
                                    <tr>
                                        <th scope="col">Column 1</th>
                                        <th scope="col">Column 2</th>
                                        <th scope="col">Column 3</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>ABC123</td>
                                        <td>GDU639</td>
                                        <td>PRE456</td>
                                    </tr>
                                    <tr>
                                        <td>18:21</td>
                                        <td>16:31</td>
                                        <td>15:41</td>
                                    </tr>
                                    <tr>
                                        <td>₹12,333</td>
                                        <td>₹342,3232</td>
                                        <td>₹43,444</td>
                                    </tr>

                                </tbody>
                            </table>
                        </section>
                    </div>

                    <aside className="col-lg-4">
                        <section className="bg-white p-4 rounded shadow-sm mb-4">
                            <h2 className="h5 mb-3">Notification</h2>
                            <ul className="list-group">
                                <li className="list-group-item">Notification 1</li>
                                <li className="list-group-item">Notification 2</li>
                                <li className="list-group-item">Notification 3</li>
                            </ul>
                        </section>
                    </aside>
                </div>
            </div>
        </div>
  )
}

export default User