"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Fingerprint, AlertCircle, CheckCircle, ArrowLeft, RefreshCw } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Simulación de estados del dispositivo
const DEVICE_STATES = {
  DISCONNECTED: "disconnected",
  READY: "ready",
  CAPTURING: "capturing",
  PROCESSING: "processing",
  SUCCESS: "success",
  ERROR: "error",
}

export default function FingerprintEnrollmentPage() {
  const params = useParams()
  const router = useRouter()
  const [employee, setEmployee] = useState<any>(null)
  const [deviceState, setDeviceState] = useState(DEVICE_STATES.DISCONNECTED)
  const [captureStep, setCaptureStep] = useState(0)
  const [error, setError] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)

  // Simulación de carga de datos del empleado
  useEffect(() => {
    // En una implementación real, esto sería una llamada a la API
    const mockEmployee = {
      id: params.id,
      nombre: "Carlos",
      apellido: "Pérez",
      cedula: "V-12345678",
      huellaDactilar: null,
    }
    setEmployee(mockEmployee)

    // Simulación de conexión con el dispositivo
    const timer = setTimeout(() => {
      setDeviceState(DEVICE_STATES.READY)
    }, 2000)

    return () => clearTimeout(timer)
  }, [params.id])

  const startEnrollment = () => {
    setDeviceState(DEVICE_STATES.CAPTURING)
    setCaptureStep(1)

    // Simulación del proceso de captura
    const timer = setTimeout(() => {
      setCaptureStep(2)

      const timer2 = setTimeout(() => {
        setCaptureStep(3)

        const timer3 = setTimeout(() => {
          setDeviceState(DEVICE_STATES.PROCESSING)

          const timer4 = setTimeout(() => {
            // 90% de probabilidad de éxito
            if (Math.random() > 0.1) {
              setDeviceState(DEVICE_STATES.SUCCESS)
            } else {
              setDeviceState(DEVICE_STATES.ERROR)
              setError("No se pudo procesar la huella. La calidad de la imagen es baja.")
            }
          }, 2000)

          return () => clearTimeout(timer4)
        }, 2000)

        return () => clearTimeout(timer3)
      }, 3000)

      return () => clearTimeout(timer2)
    }, 3000)

    return () => clearTimeout(timer)
  }

  const verifyFingerprint = () => {
    setIsVerifying(true)
    setDeviceState(DEVICE_STATES.CAPTURING)

    // Simulación de verificación
    const timer = setTimeout(() => {
      setDeviceState(DEVICE_STATES.PROCESSING)

      const timer2 = setTimeout(() => {
        setDeviceState(DEVICE_STATES.SUCCESS)
        setIsVerifying(false)
      }, 2000)

      return () => clearTimeout(timer2)
    }, 3000)

    return () => clearTimeout(timer)
  }

  const resetProcess = () => {
    setDeviceState(DEVICE_STATES.READY)
    setCaptureStep(0)
    setError("")
  }

  const goBack = () => {
    router.back()
  }

  if (!employee) {
    return <div className="flex justify-center items-center h-[70vh]">Cargando...</div>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={goBack}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold tracking-tight">Registro de Huella Dactilar</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Información del Empleado</CardTitle>
            <CardDescription>Datos del empleado para el registro biométrico</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-center mb-4">
              <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center">
                <Fingerprint className="h-12 w-12 text-primary" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Nombre</p>
                <p className="text-lg font-medium">
                  {employee.nombre} {employee.apellido}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Cédula</p>
                <p className="text-lg font-medium">{employee.cedula}</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm font-medium text-muted-foreground">Estado de Huella</p>
                <div className="mt-1">
                  {employee.huellaDactilar ? (
                    <Badge
                      variant="outline"
                      className="bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    >
                      <Fingerprint className="mr-1 h-3 w-3" />
                      Registrada
                    </Badge>
                  ) : (
                    <Badge
                      variant="outline"
                      className="bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"
                    >
                      Pendiente de registro
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Dispositivo de Captura</CardTitle>
              <Badge
                variant="outline"
                className={
                  deviceState === DEVICE_STATES.DISCONNECTED
                    ? "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                    : deviceState === DEVICE_STATES.READY
                      ? "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                }
              >
                {deviceState === DEVICE_STATES.DISCONNECTED && "Desconectado"}
                {deviceState === DEVICE_STATES.READY && "Listo"}
                {deviceState === DEVICE_STATES.CAPTURING && "Capturando"}
                {deviceState === DEVICE_STATES.PROCESSING && "Procesando"}
                {deviceState === DEVICE_STATES.SUCCESS && "Completado"}
                {deviceState === DEVICE_STATES.ERROR && "Error"}
              </Badge>
            </div>
            <CardDescription>
              {deviceState === DEVICE_STATES.DISCONNECTED && "Conectando con el dispositivo..."}
              {deviceState === DEVICE_STATES.READY && "Dispositivo listo para iniciar el registro"}
              {deviceState === DEVICE_STATES.CAPTURING && "Coloque el dedo en el sensor"}
              {deviceState === DEVICE_STATES.PROCESSING && "Procesando la huella dactilar..."}
              {deviceState === DEVICE_STATES.SUCCESS && "Huella registrada correctamente"}
              {deviceState === DEVICE_STATES.ERROR && "Error en el registro de huella"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {deviceState === DEVICE_STATES.DISCONNECTED && (
              <div className="flex justify-center py-8">
                <RefreshCw className="h-12 w-12 text-muted-foreground animate-spin" />
              </div>
            )}

            {deviceState === DEVICE_STATES.READY && (
              <div className="text-center py-6">
                <Fingerprint className="h-16 w-16 mx-auto mb-4 text-primary" />
                <p className="text-muted-foreground">
                  Presione el botón "Iniciar Registro" para comenzar el proceso de captura de huella dactilar.
                </p>
              </div>
            )}

            {(deviceState === DEVICE_STATES.CAPTURING || deviceState === DEVICE_STATES.PROCESSING) && (
              <div className="space-y-6 py-4">
                <div className="flex justify-center">
                  <Fingerprint className="h-16 w-16 text-primary animate-pulse" />
                </div>

                {deviceState === DEVICE_STATES.CAPTURING && (
                  <>
                    <div className="text-center">
                      <p className="text-lg font-medium mb-1">Captura {captureStep} de 3</p>
                      <p className="text-muted-foreground">
                        {captureStep === 1 && "Coloque su dedo índice en el sensor"}
                        {captureStep === 2 && "Coloque nuevamente su dedo en el sensor"}
                        {captureStep === 3 && "Última captura, coloque su dedo una vez más"}
                      </p>
                    </div>
                    <Progress value={captureStep * 33.33} className="h-2" />
                  </>
                )}

                {deviceState === DEVICE_STATES.PROCESSING && (
                  <div className="text-center">
                    <p className="text-lg font-medium">Procesando huella</p>
                    <p className="text-muted-foreground">Generando plantilla biométrica...</p>
                    <Progress value={undefined} className="h-2 mt-4" />
                  </div>
                )}
              </div>
            )}

            {deviceState === DEVICE_STATES.SUCCESS && (
              <div className="text-center py-4">
                <CheckCircle className="h-16 w-16 mx-auto mb-4 text-green-500" />
                <p className="text-lg font-medium text-green-600 dark:text-green-400">¡Registro exitoso!</p>
                <p className="text-muted-foreground mt-2">
                  {isVerifying
                    ? "Verificación completada. La huella ha sido reconocida correctamente."
                    : "La huella dactilar ha sido registrada correctamente en el sistema."}
                </p>
              </div>
            )}

            {deviceState === DEVICE_STATES.ERROR && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error en el registro</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            {deviceState === DEVICE_STATES.READY && (
              <Button className="w-full" onClick={startEnrollment}>
                <Fingerprint className="mr-2 h-4 w-4" />
                Iniciar Registro
              </Button>
            )}

            {deviceState === DEVICE_STATES.ERROR && (
              <Button className="w-full" onClick={resetProcess}>
                <RefreshCw className="mr-2 h-4 w-4" />
                Reintentar
              </Button>
            )}

            {deviceState === DEVICE_STATES.SUCCESS && !isVerifying && (
              <Button className="w-full" variant="outline" onClick={verifyFingerprint}>
                <Fingerprint className="mr-2 h-4 w-4" />
                Verificar Huella
              </Button>
            )}

            {deviceState === DEVICE_STATES.SUCCESS && isVerifying && (
              <Button className="w-full" onClick={goBack}>
                <CheckCircle className="mr-2 h-4 w-4" />
                Finalizar
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
