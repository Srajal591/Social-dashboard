import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Analytics = () => {
  const posts = useSelector(state => state.posts);

  const data = {
    labels: posts.map(p => `Post ${p.id}`),
    datasets: [{
      label: 'Likes',
      data: posts.map(p => p.likes || 0),
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    }],
  };

  const options = {
    responsive: true,
    plugins: { legend: { position: 'top' }, title: { display: true, text: 'Post Engagement Analytics' } },
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Analytics Dashboard</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default Analytics;