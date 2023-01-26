import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-edit-info-modal',
  templateUrl: './edit-info-modal.component.html',
  styleUrls: ['./edit-info-modal.component.scss'],
})
export class EditInfoModalComponent implements OnInit {

  team$: Subscription
  teamForm: FormGroup;

  constructor(
    private teamService: TeamService,
    private fb: FormBuilder,
    private modalCtrl: ModalController
  ) {
  }

  ngOnInit() {
    this.teamForm = this.fb.group({
      name: [Validators.required],
      desc: []
    })
    this.team$ = this.teamService.team$.subscribe(teamData => {
        this.teamForm.patchValue({
          name: teamData.name,
          desc: teamData.desc
        })
      }
    );
  }

  updateTeamData() {
    this.teamService.editTeamInfo(this.teamForm.value);
    this.modalCtrl.dismiss();
  }

}
