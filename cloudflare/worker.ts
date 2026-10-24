// Envuelve el Worker que genera OpenNext para añadir el modo mantenimiento.
// Los assets estáticos (favicon, `_next/static`…) no pasan por aquí: los
// sirve Cloudflare directamente, así que siguen disponibles.

import { maintenanceResponse } from "./maintenance"

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: `.open-next/worker.js` se genera en `opennextjs-cloudflare build`
import { default as handler } from "../.open-next/worker.js"

interface Env {
  /** `"true"` activa el mantenimiento. Ver `pnpm maintenance:on`. */
  MAINTENANCE?: string
}

const worker = {
  async fetch(request: Request, env: Env, ctx: unknown) {
    if (env.MAINTENANCE === "true") return maintenanceResponse(request)

    return handler.fetch(request, env, ctx)
  },
}

export default worker
