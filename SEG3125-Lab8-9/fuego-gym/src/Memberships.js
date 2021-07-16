import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import MyNavbar from './MyNavbar'

const Memberships = () => {
    return ( 
        <div>
            <MyNavbar/>
            <div className="container my-3 p-3" id="banner">
                <h1 className="display-3" style={{textAlign: "center"}}>Start your fitness journey at Fuego Gym!</h1>
                <br></br>
                <div className="text-center">
                    <Button variant="primary" size="lg" onClick={() => setModalShow(true)}>Become a member {'>'}</Button>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <Container>
                    <h1 className="display-5">Need some insparation? Check out these workouts!</h1>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>Target</th>
                            <th>Routine</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><b>Back and Shoulders</b></td>
                                <td>
                                    Deadlifts (4 sets, 5 repetitions)
                                    <br/>
                                    Lat pulldowns (5 sets, 10-12 repetitions)
                                    <br/>
                                    Dumbell shoulder press (4 sets, 8-10 repetitions)
                                    <br/>
                                    cable lateral reaises (4 sets, 10-12 repetitions)
                                    <br/>
                                    rear delt flies (5 sets, 10-12 repetitions)
                                </td>
                            </tr>
                            <tr>
                                <td><b>Chest and Triceps</b></td>
                                <td>
                                    Bench press (4 sets, 5 repetitions)
                                    <br/>
                                    Overhead tricep dumbell press (5 sets, 10-12 repetitions)
                                    <br/>
                                    Dumbell press (4 sets, 8-10 repetitions)
                                    <br/>
                                    cable pulldowns (4 sets, 10-12 repetitions)
                                    <br/>
                                    chest flies (5 sets, 10-12 repetitions)
                                </td>
                            </tr>
                            <tr>
                                <td><b>Legs</b></td>
                                <td>
                                    Squats (4 sets, 5 repetitions)
                                    <br/>
                                    Hamstring curls (5 sets, 10-12 repetitions)
                                    <br/>
                                    Quads press (4 sets, 8-10 repetitions)
                                    <br/>
                                    Standing calf raises (4 sets, 10-12 repetitions)
                                    <br/>
                                    Seated calf raises (5 sets, 10-12 repetitions)
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </div>
        </div>
     );
}
 
export default Memberships;