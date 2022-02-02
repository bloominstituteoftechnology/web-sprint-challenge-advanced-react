const yup = require('yup')

const schema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email('email must be a valid email')
    .required('email is required')
    .max(100, 'email must be under 100 chars'),
  x: yup
    .number()
    .typeError('x coordinate must be a number')
    .required('x coordinate is required')
    .max(3, 'x coordinate must be 1, 2 or 3')
    .min(1, 'x coordinate must be 1, 2 or 3'),
  y: yup
    .number()
    .typeError('y coordinate must be a number')
    .required('y coordinate is required')
    .max(3, 'y coordinate must be 1, 2 or 3')
    .min(1, 'y coordinate must be 1, 2 or 3'),
  steps: yup
    .number()
    .typeError('steps must be a number')
    .required('steps is required')
    .min(0, 'steps must be 0 or greater'),
})

async function buildResponse(req) {
  let status = 200
  let message

  try {
    const validated = await schema.validate(req.body, { stripUnknown: true })

    const { email, x, y, steps } = validated
    const code = (((x + 1) * (y + 2)) * (steps + 1)) + email.length

    if (email === 'foo@bar.baz') {
      message = `foo@bar.baz failure #${code}`
      status = 403
    } else {
      const name = email.split('@')[0]
      message = `${name} win #${code}`
    }
  } catch (err) {
    message = `Ouch: ${err.message}`
    status = 422
  }

  return [status, { message }]
}

module.exports = {
  buildResponse,
}
