import { Chip } from '@mui/material';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const Badge = ({label, color}) => {
  return (
    <>
    <Chip
        style={{ marginRight: "5px", marginBottom: "5px" }}
        label={label}
        key={"blog_tag_" + uuidv4()}
        color={color ? color : "default"}
        />
    </>
  )
}

const BadgeNative = ({label, color, textColor}) => {
    const style = {
        border: '1px solid',
        borderRadius: '11px',
        fontStyle: 'italic',
        padding: '2px',
        color: 'rgb(56, 138, 178)',
        fontSize: '10px',
        fontWeight: '600',
    }
    return (
      <>
      <span style={style}>{label}</span>
      </>
    )
  }

export {
    Badge,
    BadgeNative,
};
