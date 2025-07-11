import { TextField, Button, Container, Typography, CircularProgress } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { loginUserThunk } from '../../features/authSlice'

function Login() {
   const [email, setEmail] = useState('') // 이메일
   const [password, setPassword] = useState('') //비밀번호
   const dispatch = useDispatch()
   const { error, loading } = useSelector((s) => s.auth)
   const navigate = useNavigate()

   // 로그인 버튼 눌렀을때
   const handleLogin = (e) => {
      e.preventDefault()
      if (!email.trim() || !password.trim()) {
         alert('이메일과 패스워드를 입력해주세요.')
         return
      }
      dispatch(loginUserThunk({ email, password }))
         .unwrap()
         .then(() => navigate('/')) //로그인 성공시 메인페이지로
         .catch((e) => console.error('로그인 실패 : ', e))
   }

   return (
      <Container maxWidth="sm">
         <Typography variant="h4" gutterBottom>
            로그인
         </Typography>

         {error && (
            <Typography color="error" align="center">
               {error}
            </Typography>
         )}

         <form onSubmit={handleLogin}>
            <TextField label="이메일" name="email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />

            <TextField label="비밀번호" type="password" name="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />

            <Button variant="contained" color="primary" type="submit" fullWidth disabled={loading} sx={{ position: 'relative', marginTop: '20px' }}>
               {loading ? (
                  <CircularProgress
                     size={24}
                     sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                     }}
                  />
               ) : (
                  '로그인'
               )}
            </Button>
         </form>

         <p>
            계정이 없으신가요? <Link to="/signup">회원가입</Link>
         </p>
      </Container>
   )
}

export default Login
