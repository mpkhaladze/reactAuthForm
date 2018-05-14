export const tokenKeys = {
  front: ['token_type', 'expires_in', 'access_token', 'refresh_token'],
  back: ['token_type', 'expires_in', 'access_token', 'refresh_token']
}

export const userKeys = {
  front: ['email', 'fb_id', 'google_id', 'id', 'status', 'streams_count', 'streams_limit', 'type', 'username'],
  back: ['email', 'fb_id', 'google_id', 'id', 'status', 'streams_count', 'streams_limit', 'type', 'username']
}

export const streamKeys = {
  front: ['__type', 'id', 'status', 'type', 'name', 'timezone', 'source_url', 'logo', 'fmle_password', 'archive_hours', 'privacy'],
  back: ['__type', 'id', 'status', 'type', 'name', 'timezone', 'source_url', 'logo', 'fmle_password', 'archive_hours', 'privacy']
}
