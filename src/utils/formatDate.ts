import { format } from 'date-fns'

export function formatDate(utcDate: string): string {
  return format(new Date(utcDate), 'dd.MM.yyyy')
}

export function formatTime(utcDate: string): string {
  return format(new Date(utcDate), 'HH:mm')
}

export function formatDateForApi(date: Date): string {
  return format(date, 'yyyy-MM-dd')
}
