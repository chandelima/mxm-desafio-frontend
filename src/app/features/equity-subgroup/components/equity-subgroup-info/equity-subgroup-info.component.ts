import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { EquitySubgroupService } from '../../services/equity-subgroup.service';
import { EquitySubgroupResponseInterface } from '../../interfaces/equity-subgroup-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equity-subgroup-info',
  templateUrl: './equity-subgroup-info.component.html',
  styleUrls: ['./equity-subgroup-info.component.scss']
})
export class EquitySubgroupInfoComponent implements OnInit, OnChanges {
  @Input() id?: string;
  @Output() modalVisible = new EventEmitter<boolean>();
  data?: EquitySubgroupResponseInterface;

  constructor(
    private readonly service: EquitySubgroupService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    if (!this.id) return;

    // this.getEquitySubgroup();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.id) {
      this.data = undefined;
      return;
    }

    this.id = changes["id"].currentValue;
    // this.getEquitySubgroup();
  }

  close(): void {
    this.router.navigate(["/app/equity-subgroup/",]);
    this.modalVisible.emit(false);
    this.data = undefined;
  }

  // getEquitySubgroup(): void {
  //   this.service.getById(this.id!).subscribe({
  //     next: data => this.data = data,
  //     error: _ => {
  //       this.id = undefined;
  //       this.data = undefined;
  //     }
  //   });
  // }
}
