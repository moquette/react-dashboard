/* eslint-disable import/no-cycle */

import Litepicker from 'litepicker'
import dayjs from 'dayjs'
import { LitepickerElement, LitepickerProps } from './index'

// @ts-expect-error will be fixed later
interface Picker extends Litepicker {
  on?: (
    event: string,
    cb: (
      startDate: {
        dateInstance: Date
      },
      endDate: {
        dateInstance: Date
      }
    ) => void
    // eslint-disable-next-line @typescript-eslint/ban-types
  ) => {}
}

const getDateFormat = (format: string | undefined) => {
  return format !== undefined ? format : 'D MMM, YYYY'
}

const setValue = (props: LitepickerProps) => {
  const format = getDateFormat(props.options.format)
  if (!props.value.length) {
    let date = dayjs().format(format)
    date +=
      !props.options.singleMode && props.options.singleMode !== undefined
        ? ` - ${dayjs().add(1, 'month').format(format)}`
        : ''
    props.onChange(date)
  }
}

const init = (el: LitepickerElement, props: LitepickerProps) => {
  const format = getDateFormat(props.options.format)
  // eslint-disable-next-line no-param-reassign
  el.litePickerInstance = new Litepicker({
    ...props.options,
    element: el,
    format,
    setup: (picker: Picker) => {
      if (picker.on) {
        picker.on('selected', (startDate, endDate) => {
          let date = dayjs(startDate.dateInstance).format(format)
          date +=
            endDate !== undefined
              ? ` - ${dayjs(endDate.dateInstance).format(format)}`
              : ''
          props.onChange(date)
        })
      }
    },
  })
}

const reInit = (el: LitepickerElement, props: LitepickerProps) => {
  el.litePickerInstance.destroy()
  init(el, props)
}

export { setValue, init, reInit }
