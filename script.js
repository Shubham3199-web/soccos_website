// Intersection Observer for entrance animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('section, .service-card, .experience-item, .education-item, .skill-item, .analytics-placeholder, .contact-info, .contact-form').forEach(el => {
  observer.observe(el);
});

// --- Analytics Graphs (using Chart.js) ---
// Add Chart.js via CDN in index.html if not present
// Example data from CV
function renderAnalyticsGraphs() {
  // Revenue Growth at Sleepy Owl Coffee
  const ctx1 = document.getElementById('revenueGrowthChart');
  if (ctx1) {
    new Chart(ctx1, {
      type: 'line',
      data: {
        labels: ['2020', '2021', '2022'],
        datasets: [{
          label: 'ARR (USD Millions)',
          data: [2.2, 4.5, 7.2],
          borderColor: '#6B7A3A',
          backgroundColor: 'rgba(107,122,58,0.1)',
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true } }
      }
    });
  }

  // Acquisitions at UpScalio
  const ctx2 = document.getElementById('acquisitionsChart');
  if (ctx2) {
    new Chart(ctx2, {
      type: 'bar',
      data: {
        labels: ['Acquisitions'],
        datasets: [{
          label: 'No. of Acquisitions',
          data: [7],
          backgroundColor: '#B6A77A',
        }]
      },
      options: {
        indexAxis: 'y',
        plugins: { legend: { display: false } },
        scales: { x: { beginAtZero: true, max: 10 } }
      }
    });
  }

  // Academic Performance
  const ctx3 = document.getElementById('academicChart');
  if (ctx3) {
    new Chart(ctx3, {
      type: 'doughnut',
      data: {
        labels: ['CFA Level 1', 'B.Com (CGPA)', 'CBSE (XII)', 'CBSE (X)'],
        datasets: [{
          data: [1, 7.2, 92.2, 95.2],
          backgroundColor: ['#6B7A3A', '#B6A77A', '#EDE6D6', '#D9CBA3'],
        }]
      },
      options: {
        plugins: { legend: { position: 'bottom' } }
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', renderAnalyticsGraphs); 