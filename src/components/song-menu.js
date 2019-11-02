/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"
import { formatDistance } from "date-fns"

import Clap from "./clap"

const SongMenu = ({ songTimestamp, authorName }) => {
  return (
    <Fragment>
      <div>
        by: <span sx={{ color: `text` }}>{authorName}</span>
      </div>
      <div
        sx={{
          textTransform: `uppercase`,
          fontSize: `0`,
          fontWeight: `bold`,
        }}
      >
        {formatDistance(new Date(songTimestamp), new Date())} ago
      </div>
      <Clap />
    </Fragment>
  )
}

export default SongMenu
