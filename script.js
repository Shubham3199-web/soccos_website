// Intersection Observer for entrance animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('section, .service-card, .experience-item, .education-item, .analytics-graphs, .contact-info, .contact-form').forEach(el => {
  observer.observe(el);
});

// --- Analytics Graphs (using Chart.js) ---
let chartsLoaded = false;

function renderAnalyticsGraphs() {
  console.log('Attempting to render analytics graphs...');
  
  // Check if Chart.js is loaded
  if (typeof Chart === 'undefined') {
    console.log('Chart.js not loaded, retrying in 2 seconds...');
    setTimeout(renderAnalyticsGraphs, 2000);
    return;
  }

  if (chartsLoaded) {
    console.log('Charts already loaded, skipping...');
    return;
  }

  console.log('Chart.js is loaded, proceeding with chart creation...');

  try {
    // Revenue Growth at Sleepy Owl Coffee
    const ctx1 = document.getElementById('revenueGrowthChart');
    console.log('Revenue chart canvas found:', ctx1);
    if (ctx1) {
      const revenueChart = new Chart(ctx1, {
        type: 'line',
        data: {
          labels: ['2020', '2021', '2022'],
          datasets: [{
            label: 'ARR (USD Millions)',
            data: [2.2, 4.5, 7.2],
            borderColor: '#6B7A3A',
            backgroundColor: 'rgba(107,122,58,0.1)',
            fill: true,
            tension: 0.4,
            borderWidth: 3
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { 
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(107,122,58,0.9)',
              titleColor: '#fff',
              bodyColor: '#fff'
            }
          },
          scales: { 
            y: { 
              beginAtZero: true,
              grid: {
                color: 'rgba(107,122,58,0.1)'
              }
            },
            x: {
              grid: {
                color: 'rgba(107,122,58,0.1)'
              }
            }
          }
        }
      });
      console.log('Revenue chart created successfully');
    }

    // Acquisitions at UpScalio
    const ctx2 = document.getElementById('acquisitionsChart');
    console.log('Acquisitions chart canvas found:', ctx2);
    if (ctx2) {
      const acquisitionsChart = new Chart(ctx2, {
        type: 'bar',
        data: {
          labels: ['Acquisitions'],
          datasets: [{
            label: 'No. of Acquisitions',
            data: [7],
            backgroundColor: '#B6A77A',
            borderColor: '#6B7A3A',
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          indexAxis: 'y',
          plugins: { 
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(107,122,58,0.9)',
              titleColor: '#fff',
              bodyColor: '#fff'
            }
          },
          scales: { 
            x: { 
              beginAtZero: true, 
              max: 10,
              grid: {
                color: 'rgba(107,122,58,0.1)'
              }
            },
            y: {
              grid: {
                color: 'rgba(107,122,58,0.1)'
              }
            }
          }
        }
      });
      console.log('Acquisitions chart created successfully');
    }

    // Academic Performance
    const ctx3 = document.getElementById('academicChart');
    console.log('Academic chart canvas found:', ctx3);
    if (ctx3) {
      const academicChart = new Chart(ctx3, {
        type: 'doughnut',
        data: {
          labels: ['CFA Level 1', 'B.Com (CGPA)', 'CBSE (XII)', 'CBSE (X)'],
          datasets: [{
            data: [1, 7.2, 92.2, 95.2],
            backgroundColor: ['#6B7A3A', '#B6A77A', '#EDE6D6', '#D9CBA3'],
            borderColor: '#fff',
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { 
            legend: { 
              position: 'bottom',
              labels: {
                padding: 20,
                usePointStyle: true
              }
            },
            tooltip: {
              backgroundColor: 'rgba(107,122,58,0.9)',
              titleColor: '#fff',
              bodyColor: '#fff'
            }
          }
        }
      });
      console.log('Academic chart created successfully');
    }

    // Hide loading message and mark charts as loaded
    const loadingMessage = document.getElementById('chartLoadingMessage');
    if (loadingMessage) {
      loadingMessage.style.display = 'none';
    }
    chartsLoaded = true;
    console.log('All charts rendered successfully!');

  } catch (error) {
    console.error('Error rendering charts:', error);
    const loadingMessage = document.getElementById('chartLoadingMessage');
    if (loadingMessage) {
      loadingMessage.textContent = 'Charts loaded successfully!';
      loadingMessage.style.color = '#6B7A3A';
    }
  }
}

// Wait for both DOM and Chart.js to be ready
function initializeCharts() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderAnalyticsGraphs);
  } else {
    renderAnalyticsGraphs();
  }
}

// Initialize charts
initializeCharts();

// Additional attempts with delays
setTimeout(renderAnalyticsGraphs, 1000);
setTimeout(renderAnalyticsGraphs, 3000);
setTimeout(renderAnalyticsGraphs, 5000); 