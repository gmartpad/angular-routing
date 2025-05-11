import { Component, computed, DestroyRef, inject, input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent implements OnInit {
  // userId = input.required<string>()
  message = input.required<string>()
  private usersService = inject(UsersService)
  private activatedRoute = inject(ActivatedRoute)
  private destroyRef = inject(DestroyRef)

  userName = ''

  // userName = computed(
  //   () => this.usersService.users.find((u) => u.id === this.userId())?.name ?? ''
  // )

  ngOnInit(): void {
    console.log(this.message())
    // console.log(this.activatedRoute)
    const subscription = this.activatedRoute.paramMap.subscribe({
      next: (paramMap) => {
        const userId = paramMap.get('userId')
        this.userName = this.usersService.users.find((u) => u.id === userId)?.name ?? ''
      }
    })

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe()
    })
  }
}
