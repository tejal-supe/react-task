import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


const Admin = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Sales',
                data: [3000, 2000, 4000, 5000, 3000, 6000],
                fill: true,
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
            },
        ],
    };

  return (
    <div className="container mt-4">
            

            <div className="row mb-4">
                <div className="col-md-6">
                    <div className="card p-3 text-center">
                        <h5>Today's Sale</h5>
                        <p className="display-6">$15,000</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card p-3 text-center">
                        <h5>Monthly Sale</h5>
                        <p className="display-6">$120,000</p>
                    </div>
                </div>
            </div>

            <div className="card p-3">
                <h5>Sales Report</h5>
                <Line data={data} />
            </div>
        </div>
  )
}

export default Admin