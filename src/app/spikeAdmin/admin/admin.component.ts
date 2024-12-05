import { Component ,HostListener} from '@angular/core';
import * as Highcharts from 'highcharts';
import { ElementRef } from '@angular/core';
declare var Chart: any;


interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  // Highcharts = Highcharts;
  // chartOptions: Highcharts.Options = {

  //   xAxis: {
  //     categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  //   },
  //   series: [
  //     {
  //       name: 'Profit',
  //       type: 'column',
  //       data: [9, 8, 6, 7, 5, 9, 12],
  //       color: 'blue'
  //     },
  //     {
  //       name: 'Expenses',
  //       type: 'column',
  //       data: [5, 6, 3, 4, 2, 6, 8],
  //       color: 'pink'
  //     }
  //   ]
  // };


  Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      labels: {
        style: {
          color: 'lightgray' // Set the label color to gray
        }
      },
      lineColor: 'gray' // Set the x-axis line color to gray
    },
    yAxis: {
      title: {
        text: 'Values'
      },
      tickPositions: [0, 3, 6, 9, 12], // Set custom intervals for the y-axis
      labels: {
        style: {
          color: 'lightgray' // Set the y-axis label color to gray
        }
      },
      gridLineColor: 'lightgray',
        gridLineDashStyle: 'Dash'
      
    },
    plotOptions: {
      column: {
        pointWidth: 13,
        borderRadius : 20 
      }
    },
    series: [
      {
        // name: 'Profit',
        type: 'column',
        data: [9, 8, 6, 7, 5, 9, 12],
        color: 'blue'
      },
      {
        // name: 'Expenses',
        type: 'column',
        data: [5, 6, 3, 4, 2, 6, 8],
        color: 'pink'
      }
    ]
  };
  


  // donut chart
  ngAfterViewInit() {
    const ctx = document.getElementById('trafficChart') as HTMLCanvasElement;

    if (ctx) {
      new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Organic', 'Referral'],
          datasets: [
            {
              data: [60, 40],
              backgroundColor: ['#007bff', '#dc3545'],
              borderWidth: 0,
            },
          ],
        },
        options: {
          cutout: '70%', // Adjust for the donut style
          plugins: {
            legend: { display: false },
          },
        },
      });
    } else {
      console.error('Canvas element not found');
    }
  }










  // Highcharts: typeof Highcharts = Highcharts;

  // Doughnut Chart Configuration
  trafficChartOptions: Highcharts.Options = {
    chart: {
      type: 'pie',
    },
    title: {
      text: undefined,
    },
    plotOptions: {
      pie: {
        innerSize: '70%', // Makes it a doughnut
        dataLabels: {
          enabled: false,
        },
      },
    },
    series: [
      {
        type: 'pie',
        data: [
          { name: 'Organic', y: 60, color: 'lightgray' }, // Blue
          { name: 'Referral', y: 40, color: 'pink' }, // Pink
          { name: 'Referral', y: 30, color: 'blue' }, // Pink
        ],
      },
    ],
  };

  // Line Chart Configuration

  

  lineChartOptions: Highcharts.Options = {
    chart: {
      type: 'spline',
      backgroundColor: 'transparent',
      margin: [0, 0, 0, 0],
    },
    title: {
      text: undefined,
    },
    xAxis: {
      visible: false,
    },
    yAxis: {
      visible: false,
      min: 0,
      max: 100,
    },
    series: [
      {
        type: 'spline',
        data: [25, 66, 20, 40, 12, 59, 20],
        color: '#007bff',
        marker: {
          enabled: false,
        },
        lineWidth: 2,
      },
    ],
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
  };

  // primeng
  // events: EventItem[];

  // constructor() {
  //     this.events = [
  //         { status: 'Payment received from John Doe of $385.90', date: ' 9:30 am',  color: 'blue',},
  //         { status: 'New sale recorded #ML-346', date: ' 10:00 am', color: 'black' },
  //         { status: 'Payment was made of $64.95 to Michael', date: ' 12:00 am', color: 'green' },
  //         { status: 'New sale recorded #ML-3467', date: ' 9:30 am', color: 'orange' },
  //         { status: 'New arrival recorded', date: ' 9:30 am', color: 'orange' },
  //         { status: 'Payment Received', date: ' 12:30 am',color: 'green' }
  //     ];
  // }


  // primeng table
 

  employees = [
    {
      name: 'Sunil Joshi',
      role: 'Web Designer',
      project: 'Elite Admin',
      priority: 'Low',
      budget: '$3.9',
      id: 2,
    },
    {
      name: 'Andrew McDownland',
      role: 'Project Manager',
      project: 'Real Homes WP Theme',
      priority: 'Medium',
      budget: '$24.5k',
      id: 3,
    },
    {
      name: 'Christopher Jamil',
      role: 'Project Manager',
      project: 'MedicalPro WP Theme',
      priority: 'High',
      budget: '$12.8k',
      id: 4,
    },
    {
      name: 'Nirav Joshi',
      role: 'Frontend Engineer',
      project: 'Hosting Press HTML',
      priority: 'Critical',
      budget: '$2.4k',
      id: 5,
    },
    {
      name: 'Tim George',
      role: 'Web Designer',
      project: 'Hosting Press HTML',
      priority: 'Critical',
      budget: '$5.4k',
      id: 6,
    },
  ];

  getPriorityClass(priority: string): string {


    switch (priority) {
      case 'Low':
        return 'low-priority';
      case 'Medium':
        return 'medium-priority';
      case 'High':
        return 'high-priority';
      case 'Critical':
        return 'critical-priority';
        case 'Critical-1':
          return 'critical-priority-1';
      default:
        return ''; // No class if priority is not matched
    }
  }
  events = [
    { time: '09:30 am', title: 'Payment received from John Doe of', },
    { time: '10:00 am', title: 'New sale recorded', description: '#ML-3467' },
    { time: '12:00 am', title: 'Payment was made of $64.95',},
    { time: '09:30 am', title: 'New sale recorded', description: '#ML-3467' },
    { time: '09:30 am', title: 'New Arrival Recorded',},
    { time: '12:00 am', title: 'Payment Received',},
  ];










  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }
}
  

