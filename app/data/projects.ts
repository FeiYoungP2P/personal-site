export interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  highlights: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'AGV现场调试与控制系统',
    description: '参与AGV车载控制系统、现场设备和网络通信调试。',
    technologies: [
      'TIA Portal',
      'Siemens PLC',
      'PROFINET',
      'PROFIsafe',
      'CANopen'
    ],
    highlights: [
      '完成车载设备参数配置',
      '处理驱动、导航和通信故障',
      '整理现场调试文档'
    ]
  },
  {
    id: 2,
    title: 'Java企业应用开发',
    description: '基于Java技术栈完成企业级应用的前后端开发。',
    technologies: [
      'Java',
      'Spring Boot',
      'MySQL',
      'Vue.js'
    ],
    highlights: [
      '后端接口设计',
      '数据库设计',
      'Vue前端开发'
    ]
  }
]
