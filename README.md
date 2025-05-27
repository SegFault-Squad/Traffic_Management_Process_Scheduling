# 🚦 Traffic Light Management Simulator

An interactive web-based simulator that models traffic flow at an intersection using various CPU scheduling algorithms such as Round Robin, Shortest Job First, Priority 
Scheduling, and Longest Job First. This simulation helps evaluate and compare the efficiency of these algorithms in managing lane traffic to minimize vehicle delays.
 
## ✨ Features
- Simulate up to 4 traffic lanes.
- Enter vehicle details: burst time, priority, and arrival time.
- Compare multiple scheduling strategies:
  - Round Robin
  - Shortest Job First (SJF)
  - Priority Scheduling
  - Longest Job First (LJF)
- Visual intersection canvas with animated vehicle movement.
- Performance metrics:
  - Average Waiting Time
  - Average Turnaround Time
- Gantt chart generation per algorithm.
- Export simulation results to CSV.
- Recommends the best algorithm for the current traffic setup.

## 🛠 Technologies Used
- **HTML5**, **CSS3** (TailwindCSS)
- **JavaScript**
- No external backend — fully client-side

## 🚀 Getting Started

### Prerequisites
A modern browser (Chrome, Firefox, Edge, Safari)

### Running Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/SegFault-Squad/traffic-light-simulator.git
   cd traffic-light-simulator
