classDiagram
    class WithdrawPage {
        +useState()
        +useHistory()
        +handleWithdraw()
    }
    
    class Splash {
        +useEffect()
        +useHistory()
    }
    
    class ProfilePage {
        +useHistory()
    }
    
    class PostDetailPage {
        +useHistory()
        +navigateToBoard()
    }
    
    class MessageWrite {
        +useState()
        +handleFileChange()
    }
    
    class MessagePage {
        +useState()
        +useEffect()
        +navigateToBoard()
    }
    
    class Home {
        +useHistory()
        +navigateToBoard()
        +navigateToBoardWrite()
    }
    
    class BoardWrite {
        +useState()
        +handleFileChange()
    }
    
    class Board {
        +useHistory()
        +navigateToBoard()
    }
    
    class Signup {
        +useState()
        +handleSignup()
    }
    
    class Login {
        +useState()
        +handleLogin()
    }

    WithdrawPage --> ProfilePage : 회원탈퇴
    ProfilePage --> WithdrawPage : 회원탈퇴
    ProfilePage --> Login : 로그아웃
    Splash --> Home : 자동 리다이렉트
    Home --> PostDetailPage : 게시글 클릭
    Home --> MessagePage : 쪽지함
    Home --> ProfilePage : 프로필
    Home --> Board : 더보기
    Home --> BoardWrite : 게시글 쓰기
    Board --> PostDetailPage : 게시글 클릭
    Board --> BoardWrite : 게시글 쓰기
    MessagePage --> MessageWrite : 쪽지 쓰기
    PostDetailPage --> MessageWrite : 쪽지 쓰기
    Login --> Home : 로그인 성공
    Signup --> Home : 회원가입 성공
