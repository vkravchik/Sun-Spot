import React from 'react';
import { Badge, Tag } from 'antd';

export const COLUMNS = [
  { title: 'Match ID', dataIndex: 'key', key: 'key' },
  { title: 'Game Duration', dataIndex: 'duration', key: 'duration' },
  { title: 'First Blood Time', dataIndex: 'first_blood_time', key: 'first_blood_time' },
  {
    title: 'Radiant Score',
    dataIndex: 'radiant_score',
    key: 'radiant_score',
    render: (score) => (
      <span>
           <Badge count={score} style={{ backgroundColor: '#52c41a' }}/>
        </span>
    )
  },
  {
    title: 'Dire Score',
    dataIndex: 'dire_score',
    key: 'dire_score',
    render: (score) => (
      <span>
          <Badge count={score} style={{ backgroundColor: '#fa541c' }}/>
        </span>
    )
  },
  {
    title: 'Winner',
    dataIndex: 'radiant_win',
    key: 'radiant_win',
    render: (radiantWin) => (
      <span>
          <Tag color={radiantWin === 'true' ? 'green' : 'volcano'}>{radiantWin === 'true' ? 'Radiant' : 'Dire'}</Tag>
        </span>
    )
  }
];

export const NESTED_COLUMNS = [
  { title: 'Hero', dataIndex: 'hero_id', key: 'hero_id' },
  {
    title: 'Kills',
    dataIndex: 'kills',
    key: 'kills',
    sorter: (a, b) => a.kills - b.kills

  },
  {
    title: 'Deaths',
    dataIndex: 'deaths',
    key: 'deaths',
    sorter: (a, b) => a.deaths - b.deaths
  },
  {
    title: 'Assists',
    dataIndex: 'assists',
    key: 'assists',
    sorter: (a, b) => a.assists - b.assists
  },
  {
    title: 'Gold/min',
    dataIndex: 'gold_per_min',
    key: 'gold_per_min',
    sorter: (a, b) => a.gold_per_min - b.gold_per_min
  },
  {
    title: 'XP/min',
    dataIndex: 'xp_per_min',
    key: 'xp_per_min',
    sorter: (a, b) => a.xp_per_min - b.xp_per_min
  },
  {
    title: 'Team',
    key: 'isRadiant',
    dataIndex: 'isRadiant',
    render: (isRadiant) => (
      <span>
          <Tag color={isRadiant === 'true' ? 'green' : 'volcano'}>{isRadiant === 'true' ? 'Radiant' : 'Dire'}</Tag>
        </span>
    )
  }
];
