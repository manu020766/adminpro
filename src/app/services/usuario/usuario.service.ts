import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { HTTP_URL } from '../../config/config'
import { Usuario } from '../../models/usuario.model'
import { map, tap, catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario
  token: string

  constructor(private http:HttpClient) { }

  getUsuario(): Usuario {
    return JSON.parse(localStorage.getItem('usuario'))
  }

  estaLogeado():boolean {
    return !!localStorage.getItem('token')
  }

  logout() {
    localStorage.removeItem('id')
    localStorage.removeItem('token')
    localStorage.removeItem('usuario')

    this.usuario = undefined
    this.token = undefined
  }
  guardarStorage(id: string, token: string, usuario: Usuario) {
      localStorage.setItem('id', id)
      localStorage.setItem('token', token)
      localStorage.setItem('usuario', JSON.stringify(usuario))

      this.usuario = usuario
      this.token = token
  }

  loginGoogle(token: string) {
    let url = HTTP_URL + '/login/google'

    return this.http.post(url, { token }).pipe(
      map((resp:any) => {
        this.guardarStorage(resp.id, resp.token, resp.usuarioDB)
        return true
      })
    )
  }

  createUsuario(usuario:Usuario) {
    return this.http.post(HTTP_URL + '/usuario', usuario)
  }

  actualizarUsuario(usuario: Usuario) {
    let url = HTTP_URL + '/usuario/' + usuario._id + '?token=' + localStorage.getItem('token')

    return this.http.put(url, usuario).pipe(
      tap( (res:any) => localStorage.setItem('usuario', JSON.stringify(res.usuario)))
    )
  }


  loginUsuario(usuario:Usuario) {
    return this.http.post(HTTP_URL + '/login', usuario).pipe(
      map((resp:any) => {
        this.guardarStorage(resp.id, resp.token, resp.usuarioDB)
        return true
      })
    )
  }
}
